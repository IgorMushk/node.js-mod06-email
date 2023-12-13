const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;
const {META_MAIL_FROM} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    post: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: META_MAIL_FROM,
        pass: META_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "jemoj96892@hupoi.com",
    from: META_MAIL_FROM,
    subject: "Test email",
    html: "<p><strong>Test email</strong> from loaclhost:3000</p>"
};

transport.sendMail(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message));
    