const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;
const {SG_MAIL_FROM}  = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "jemoj96892@hupoi.com",
    from: SG_MAIL_FROM,
    subject: "Test email",
    html: "<p><strong>Test email</strong> from loaclhost:3000</p>"
}

sgMail.send(email)
    .then(()=>console.log("Email send sucsess"))
    .catch(error => console.log(error.message));