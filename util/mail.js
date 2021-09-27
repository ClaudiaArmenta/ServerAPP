const nodemailer = require('nodemailer');

//Cuenta con la que se va a envíar el correo.
const correo_origen = 'elcorreo@itesm.mx'
const password  = 'constraseña123'

//Cuenta a la que se va a envíar el correo
var correo_destino = 'destino@itesm.mx'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: correo_origen,
    pass: password
  }
});

const mailOptions(correo_origen, correo_destino) = {
  from: correo_origen,
  to: correo_destino,
  subject: 'Confirmación de donación.',
  html: '<h1>Su donación fue completada con éxito.<h1><p>Gracias por su donación.<p>'
};

transporter.sendMail(mailOptions(correo_origen, correo_destino), function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
