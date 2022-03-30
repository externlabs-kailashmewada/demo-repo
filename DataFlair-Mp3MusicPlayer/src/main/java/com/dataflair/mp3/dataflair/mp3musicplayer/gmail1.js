var http = require("http");
var nodeMailer = require("nodemailer");
var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'kailashmewada485@gmail.com',
        pass: 'Kailash@321',
    },
});
var mailOptions = {
    from: 'kailashmewada485@gmail.com',
    to: "ay36808@gmail.com",
    subject: "welcome Brother in the party!! in NODE",
    text: `"This is a mail genrated through js
    I tell you bewafe from frode mail and i would suggest you
    dont reply this mail varns mene teri esi tesi kri... hahhhahah"`,
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.warn("Error!!!", error);
    } else {
        console.warn("Mail has been sent successfully!", info.response);
    }
});