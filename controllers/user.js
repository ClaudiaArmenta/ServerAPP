//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const User = sequelize.models.User;
const path = require('path');
const { RequestError } = require('tedious');
const crypto = require('crypto');

exports.postAgregarUsuario = (req,res)=>{
    console.log(req.body);
    User.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        salt: req.body.salt,
        phoneNumber: req.body.phoneNumber,
        dateOfBirth: req.body.birthday,
        hasMonthlyDonation: req.body.hasMonthlyDonation
    }).then(resultado=>console.log("Registro UserData exitoso"))
      .catch(error=>console.log(error));
    res.json({ username: 'UwU' })
};


exports.postVerificaUsuario = (req,res)=>{
  console.log(req.body);
  User.findByPk(req.body.email)
  .then(resultado=>{
      if(resultado){
        res.json({ answer: 'NO' });
      }else{
        res.json({ answer: 'SI' });
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
              res.send("siiuuuu");
          }else{
              res.send("contraseña mala");
          }
      }else{
          res.send("ni existe el usuario chavo");
      }
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};
