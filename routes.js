const { sendTemplateEmail } = require('./mails');

const contactRequest = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    console.log(req.body);
    const info1  = await sendTemplateEmail('for-me', 'Customer request', { name, email, phone }, 'mariasheremet17@gmail.com');
    console.log(info1);
    const info2  = await sendTemplateEmail('for-you', 'Subscribed!', { name, email, phone }, email);
    console.log(info2);

    res.status(200).json({
      result: 'success',
      code: 0
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      result: 'error',
      code: -1
    });
  }
};

module.exports = app => {
    app.post('/contact', contactRequest);
};