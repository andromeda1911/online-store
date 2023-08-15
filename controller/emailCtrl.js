const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });
  main();
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Hey!" <abc@example.com>',
      to: data.to,
      subject: data.subject,
      text: data.text, 
      html: data.html, 
    });
    
    console.log('email sent!');
    console.log("Message sent: %s", info.messageId);
  }
});

module.exports = {sendEmail};