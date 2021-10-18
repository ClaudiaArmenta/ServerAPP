const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});

//Cuenta a la que se va a envíar el correo
var correo_destino = 'destino@itesm.mx'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: correo_origen,
    pass: password
  }
});

let mailOptions = {
    from: 'abc@gmail.com', // TODO: email sender
    to: 'cba@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});
