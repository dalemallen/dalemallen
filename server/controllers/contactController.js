const nodemailer = require("nodemailer");

const submitContactForm = async (req, res) => {
  const { name, email, type, budget, salary, message, honeypot } = req.body;
  console.error(process.env.SMTP_USER);
  console.error(process.env.EMAIL_TO);
  // Honeypot field protection (to block bots)
  if (honeypot) {
    console.warn("Bot detected by honeypot field.");
    return res.status(400).json({ success: false, message: "Bot detected." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 587,
      secure: false, // must be false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM, // sender (your project email)
      to: process.env.EMAIL_TO, // receiver (your Hotmail)
      subject: `New ${type || "Contact"} Form Submission`,
      text: `
New form submission:

Name: ${name}
Email: ${email}
${budget ? `Budget: ${budget}` : ""}
${salary ? `Salary Expectation: ${salary}` : ""}
Message:
${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully:", info.messageId);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(
      "❌ Email sending error:",
      error?.response || error?.message || error
    );
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
};

module.exports = { submitContactForm };
