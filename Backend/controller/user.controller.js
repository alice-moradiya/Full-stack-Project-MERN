import User from "../model/user.model.js"
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exists" });
        }
        // hashing password
        const hashedPassword = await bcryptjs.hash(password, 10);  // 10 salt value
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashedPassword,
        });
        await createdUser.save()
        res.status(201).json({ message: "User created successfully", user:{
            _id: createdUser._id,  
            fullname: createdUser.fullname,
            email: createdUser.email,
        } });

    } catch (error) {
        console.log("error ", error.message)
        res.status(500).json({ message: "Server Error" })
    }

};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // ismatch to match encypted password with user entered password
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch || !user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        else { // if user is found and password is correct
            res.status(200).json({
                message: "Login successful", user: {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email 
                }
            });
        }

    } catch (error) {
        console.log("error ", error.message)
        res.status(500).json({ message: "User not found " })
    }

}