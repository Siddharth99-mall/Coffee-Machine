const nodemailer = require("nodemailer");
const EmailConfig = require("../models/EmailConfig.js");

const sendAdminEmail = async (listing, user) => {
  try {

    // fetch email config from DB
    const config = await EmailConfig.findOne();
    console.log(config);

    const sender = config.senderEmail;
    const receiver = config.receiverEmail;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: sender,
        pass: process.env.EMAIL_PASSWORD,
      }, 
       tls: {
    rejectUnauthorized: false
  }
    });

    const mailOptions = {
      from: sender,
      to: receiver,
      subject: "🚀 New Machine Added",
      html: `
        <h2>New Machine Added</h2>
        <p><strong>Added By:</strong> ${user.username}</p>
        <p><strong>Title:</strong> ${listing.title}</p>
        <p><strong>Description:</strong> ${listing.description}</p>
        <p><strong>Price:</strong> ${listing.price}</p>
        <p><strong>Status:</strong> ${listing.location}</p>
        <p><strong>Supplier:</strong> ${listing.country}</p>
        <br/>
        <p>Login to admin panel to review.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent to Admin");

  } catch (error) {
    console.error("❌ Email Error:", error);
  }
};

const sendAdminUpdateEmail = async (listing, user) => {
  try {

    // fetch email config from DB
    const config = await EmailConfig.findOne();
    console.log(config);

    const sender = config.senderEmail;
    const receiver = config.receiverEmail;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: sender,
        pass: process.env.EMAIL_PASSWORD,
      },
       tls: {
    rejectUnauthorized: false
  }
    });

    const mailOptions = {
      from: sender,
      to: receiver,
      subject: "✏️ Machine Updated",
      html: `
        <h2>Machine Updated</h2>
        <p><strong>Updated By:</strong> ${user.username}</p>
        <p><strong>Title:</strong> ${listing.title}</p>
        <p><strong>Description:</strong> ${listing.description}</p>
        <p><strong>Price:</strong> ${listing.price}</p>
        <p><strong>Status:</strong> ${listing.location}</p>
        <p><strong>Supplier:</strong> ${listing.country}</p>
        <br/>
        <p>Login to admin panel to review the changes.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Update Email sent to Admin");

  } catch (error) {
    console.error("❌ Update Email Error:", error);
  }
};

module.exports = { sendAdminEmail, sendAdminUpdateEmail };