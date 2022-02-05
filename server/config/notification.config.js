const nodemailer = require('nodemailer');

const sendNotification = async (options) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: '587',
        auth: {
            user: '259abfa9ebd645',
            pass: 'd16cfc643c0063'
        }
    });

    const notification = {
        from: `Tv Shower 👻 <tv-shower.appp>`,
        to: options.email,
        subject: options.subject,
        text: options.body
    };

    await transport.sendMail(notification);
};

module.exports = sendNotification;