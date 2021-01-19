require("dotenv").config();
const nodemailer = require("nodemailer");

const { GMAIL_EMAIL, GMAIL_PASSWORD } = process.env;
module.exports = {
  sendEmail: async (req, res) => {
    const { customerName, customerEmail, customerNumber, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: GMAIL_EMAIL,
        pass: GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "test@test.com",
      to: "robnettsean22@gmail.com",
      subject: "Customer Information",
      text: "Hello",
      html: `<body>
            <h2>Customer Information</h2>
            <ul>
                <lil>Name: ${customerName}</lil>
                <lil>Email: ${customerEmail}</lil>
                <lil>Phone: ${customerNumber}</lil>
            </ul>
            
             <p>${message}</p>
             <body>`,
    });

    // await transporter.sendMail({
    //   from: "test@test.com",
    //   to: customerEmail,
    //   subject: "We received your message",
    //   text: "Hello",
    //   html: `<body>
    //              <p>Dear ${customerName}, </p>
    //              </b>
    //              <p>we recieved your message and will get back to you as soon as we can.</p>
    //              </b>
    //              <p>Thank you for your patience,</p>
    //              </b>
    //              <p>Active Transimisson Family</p>
    //              <body>`,
    // });

    res.status(200).send("email was sent");
  },
};
