const nodemailer = require('nodemailer');

const cuenta_correo = 'elcorreo@itesm.mx'
const contraseña_correo  = 'constraseña123'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: cuenta_correo,
    pass: contraseña_correo
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Su donación fue completada con éxito.<h1><p>Gracias por su donación.<p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
