//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const User = sequelize.models.User;
const path = require('path');
const { RequestError } = require('tedious');
const crypto = require('crypto');

exports.postAgregarUsuario = (req,res)=>{
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
          hasMonthlyDonation: req.body.hasMonthlyDonation
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
  User.findByPk(req.body.email)
  .then(resultado=>{
      if(resultado){
          if(req.body.password == resultado.password){
              res.send("SI");
          }else{
              res.send("NO");
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

exports.forgotPassword = (req, res)=>{
    const codigo = makeCode(6);
    User.findByPk(req.body.email)
    .then(resultado=>{
      if(resultado){
        User.update( { recoveryCode: codigo}, { where: {email: req.body.email } } )
        .success(res.send('código de recuperación establecido'))
        .error(res.send('error al establecer código de recuperación'))
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
