const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail({
            from: email,
            to: "maninirajbhar28@gmail.com",
            subject: subject || "New Portfolio Message",
            html: `
                <h2>New Portfolio Message</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b></p>
                <p>${message}</p>
            `
        });

        res.json({ success: true, message: "Email Sent" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { sendMail };
