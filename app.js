const express = require("express");

const app = express();
const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Email send service</h1><a href='/send-mail'>Send Email</a>");
});
app.get("/send-mail", sendMail);

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
