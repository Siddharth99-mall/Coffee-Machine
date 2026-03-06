const nodemailer = require("nodemailer");

const sendAdminEmail = async (listing, user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
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

module.exports = sendAdminEmail;