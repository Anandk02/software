const nodemailer = require("nodemailer");

// Create a transporter object with your SMTP settings
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "avengeranand1@gmail.com",
    pass: "wzuzahcllildkzuq",
  },
});

// Send email after registration
const sendWelcomeEmail = (email, name) =>
  transporter.sendMail(
    {
      from: "avengeranand1@gmail.com",
      to: email,
      subject: "Registration Successful",
      text: "We are excited to welcome you to our software website and thank you for choosing our platform to fulfill your software needs. As a new user, we want to make sure you have all the information you need to get started. /n, Our software is designed to make your life easier, and we are confident that you will find it intuitive and user-friendly. Our team is always working to provide the best experience for our users, and we are constantly updating our software to meet the evolving needs of our customers./n To get started, simply create an account on our website and explore the features and functionalities that our software has to offer. If you need any assistance, our support team is just a click away. /n Thank you again for choosing our software website. We are confident that you will find our software to be an invaluable tool in your personal or professional life. /n ",
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );

module.exports = {
  sendWelcomeEmail,
};
