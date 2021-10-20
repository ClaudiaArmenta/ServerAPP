//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const User = sequelize.models.User;
const path = require('path');
const { RequestError } = require('tedious');
const crypto = require('crypto');
const { resolveSoa } = require('dns');
const nodemailer = require('nodemailer');

exports.postAgregarUsuario = (req,res)=>{
  console.log(req.body);
  User.findByPk(req.body.UserData.email)
  .then(resultado=>{
      if(resultado){
        res.send("NO");
      }else{
        User.create({
          email: req.body.UserData.email,
          name: req.body.UserData.name,
          password: req.body.UserData.password,
          salt: req.body.UserData.salt,
          phoneNumber: req.body.UserData.phoneNumber,
          dateOfBirth: req.body.UserData.birthday,
          hasMonthlyDonation: req.body.UserData.hasMonthlyDonation,
          esAdmin: req.body.UserData.esAdmin
      }).then(res.send("YES"))
        .catch(error=>console.log(error));
      }
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};


exports.postIniciarSesion = (req,res)=>{
  console.log(req.body);
  User.findByPk(req.body.UserInicioSesion.email)
  .then(resultado=>{
      if(resultado){
          if(resultado.confirmacionCorreo){
            if(req.body.UserInicioSesion.password == resultado.password){
              if(resultado.esAdmin)
                res.send("SIADMIN");
              else
                res.send("SINORMAL");
            }else
            res.send("NO");
          }else{
            res.send("NOCONFIRMOCORREO");
          }
      }else{
          res.send("NONEXIST");
      }
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};

exports.postNombreUsuario = (req,res)=>{
  console.log(req.body);
  User.findByPk(req.body.email)
  .then(resultado=>{
    res.send(resultado.name);
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};


exports.postValidarCorreo = (req,res)=>{
  console.log(req.body);
  User.findByPk(req.body.email)
  .then(resultado=>{
      if(resultado){
        //Envia correo
        res.send("NO");
      }else{
          res.send("SI");
      }
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};


exports.postUpdatePassword = (req,res)=>{
    User.update(
    { password: req.body.password},
    { where: { email: req.body.email } })
    .then(result =>
      res.send("YES")
    )
    .catch(err =>
      res.send(err)
    )
};

exports.postEmailContacto = (req, res)=>{
    console.log(req.body);
    sendContactEmail(req.body.email, req.body.name, req.body.surname)
    .then(res.send('correo enviado'))
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};

exports.forgotPassword = (req, res)=>{
    User.findByPk(req.body.email)
    .then(resultado=>{
      if(resultado){
        var codigo = makeCode(6);
        User.update({ recoveryCode: codigo}, { where: {email: req.body.email } } )
        .then(result =>
            sendRecoveryEmail(codigo, req.body.email).then(res.send("YES")))
        .catch(err =>
            res.send("no se pudo\n" + err))
      }else{
        res.send('no se encontró al usuario');
      }
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};

exports.recoverPassword = (req, res)=>{
    User.findByPk(req.body.email)
    .then(resultado=>{
      if(resultado){
          if (req.body.codigo != 0)
          {
              if (req.body.codigo == resultado.recoveryCode)
              {
                User.update({ password: req.body.password, recoveryCode: "0"}, { where: { email: req.body.email } })
                .then(res.send("YES"));
              }else{
                  res.send('el código ingresado es incorrecto');
              }
          }else{
              res.send('no se ha solicitado un código de recuperación para esta cuenta');
          }
      }else{
        res.send('no se encontró al usuario');
      }
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};

function makeCode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}

async function sendRecoveryEmail(code, address) {

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: transporter.auth.user, // sender address
        to: address, // list of receivers
        subject: "Código de recuperación.", // Subject line
        text: "Su código de recuperación es:\n\n" + code, // plain text body
        //html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

async function sendContactEmail(address, name, surname) {

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: transporter.auth.user, // sender address
        to: address, // list of receivers
        subject: "Confirmación de solicitud de contacto.", // Subject line
        text: "Gracias por querer ser parte de nuestro proyecto, " + name + " " + surname + ".\nTe contactaremos con esta dirección de correo electrónico.", // plain text body
        //html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
