const nodemailer = require('nodemailer');

const sendEmail = (emailInfo, email) => {
    const {COMPANY_EMAIL, EMAIL_PASSWORD} = process.env;
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: COMPANY_EMAIL,
            pass: EMAIL_PASSWORD,
          },
    };
    const transporter = nodemailer.createTransport(config);
    const {subject = '', text = '', html = ''} = emailInfo;
    const info = {
        from: COMPANY_EMAIL,
        subject,
        text,
        html,
        to: email
    };
    return transporter.sendMail(info);
};

module.exports = {sendEmail};