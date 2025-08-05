import nodemailer from 'nodemailer';

export const sendContactEmail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Log the contact form data
        console.log("Contact Form Submission:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);
        
        // For now, just log the data (email setup can be added later)
        console.log("📧 Contact Form Data (would be sent to email):");
        console.log("To:", process.env.RECIPIENT_EMAIL || 'alice.moradiya@gmail.com');
        console.log("From:", email);
        console.log("Subject:", `Contact Form: ${subject}`);
        console.log("Message:", message);
        
        // TODO: Uncomment below for actual email sending
        // const transporter = nodemailer.createTransporter({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.EMAIL_USER || 'your-email@gmail.com',
        //         pass: process.env.EMAIL_PASS || 'your-app-password'
        //     }
        // });
        // 
        // const mailOptions = {
        //     from: email,
        //     to: process.env.RECIPIENT_EMAIL || 'alice.moradiya@gmail.com',
        //     subject: `Contact Form: ${subject}`,
        //     html: `
        //         <h3>New Contact Form Submission</h3>
        //         <p><strong>Name:</strong> ${name}</p>
        //         <p><strong>Email:</strong> ${email}</p>
        //         <p><strong>Subject:</strong> ${subject}</p>
        //         <p><strong>Message:</strong></p>
        //         <p>${message}</p>
        //     `
        // };
        // 
        // await transporter.sendMail(mailOptions);
        
        res.status(200).json({ 
            message: "Contact form submitted successfully",
            data: { name, email, subject, message }
        });
        
    } catch (error) {
        console.log("Contact form error:", error);
        res.status(500).json({ message: "Failed to send contact form" });
    }
}; 