const ejs = require('ejs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_USER,
    pass: process.env.SENDER_PASS,
  },
});

const makeTemplate = (template, data) => new Promise((resolve, reject) => {
  ejs.renderFile(`./mails/${template}.ejs`, data, (err, html) => {
    if (err) {
      return reject(err);
    }
    resolve(html)
  });
});

const sendEmail = (html, subject, to) => new Promise((resolve, reject) => {
  transporter.sendMail({
    from: process.env.SENDER_USER,
    to,
    subject,
    html,
  }, (error, info) => {
    if (error) {
      return reject(error);
    }
    resolve(info)
  }); 
});

const sendTemplateEmail = async (template, subject, data, to) => {
  const html = await makeTemplate(template, data);
  const info = await sendEmail(html, subject, to);
  return info;
};

module.exports = {
  sendTemplateEmail,
};