import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'admin@chatgptnologin.com', // your email address
        pass: process.env.ZOHO_PW, // your email password
      },
    });

    try {
      // Send email
      const emailRes = await transporter.sendMail({
        from: '"ChatGPT No Login" <admin@chatgptnologin.com>', // sender address
        to: 'admin@chatgptnologin.com', // list of receivers
        subject: 'New Contact Request', // Subject line
        text: `You have received a new message from ${name} (${email}): ${message}`, // plain text body
        html: `<p>You have received a new message from <b>${name}</b> (${email}):</p><p>${message}</p>`, // html body
      });

      console.log('Message Sent', emailRes.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Failed to send email', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
