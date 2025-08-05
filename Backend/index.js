import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import cors from "cors";

 
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
dotenv.config({ path: './email.env' });

const PORT = process.env.PORT || 3005
const URI = process.env.MongogDBURI;
console.log("This is URI: ", URI);

// Connect to mongoDB
try{

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); // both true cond just for local server not for atlas
console.log("Connected to MongoDB");

}catch(error){
    console.log("Error: ", error)

}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// defining route

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})