import nodemailer from "nodemailer";

export default async (req, res) => {
//   const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'omkar.t@edreamz.in',
      pass: 'sahil@2020'
    }
  });

  try {
    await transporter.sendMail({
      from: "omkar.t@edreamz.in",
      to: "rohit.p@edreamz.in",
      subject: `Contact form submission from`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong></p><br>
        <p><strong>Message: </strong></p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};