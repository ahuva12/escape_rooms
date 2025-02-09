// import nodemailer from 'nodemailer';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: process.env.EMAIL_USER,
    user: 'timerepublic.project@gmail.com',
    // pass: process.env.EMAIL_PASS,
    pass: 'ybck dbgg kfbo vcdi',
  },
});

export const sendEmail = async (toEmail:string, subjectEmail:string, textEmail:string) => {
  const mailOptions = {
    // from: process.env.EMAIL_USER, 
    from: 'timerepublic.project@gmail.com', 
    to: toEmail,
    subject: subjectEmail,
    html: textEmail,
  };

  return transporter.sendMail(mailOptions);
};
