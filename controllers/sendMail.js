const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "brycen.bahringer@ethereal.email",
      pass: "MQp8QjbjCJyJNTzGB3",
    },
  });

  let info = await transporter.sendMail({
    from: "Dinesh Legha <testing@testing.com>",
    to: "hello@dinesh.com",
    subject: "Hello",
    text: "Hello from Dinesh",
    html: "<h1>Hello from DINESH</h1>",
  });

  res.json(info);
};

module.exports = sendMail;
