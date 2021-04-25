const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: process.env.EMAIL_PORT,
    auth: {
      user: "apikey",
      pass: process.env.SEND_GRID_API_KEY,
    },
  });

  // 2) Define email options
  const mailOptions = {
    from: "Cameron Hutchings <camhutch_67@hotmail.com>",
    to: options.email,
    subject: "Xlights",
    text: "Enjoy your free sequence",
    attachments: [
      {
        filename: "Sweet Caroline - Its Christmas Time (XMAS Version).zip",
        path: "./Sweet Caroline - Its Christmas Time (XMAS Version).zip",
      },
    ],
    // html
  };
  // 3) Actually send the emails
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
