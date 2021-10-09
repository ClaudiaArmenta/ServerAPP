//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Organization = sequelize.models.Organization;
const path = require('path');

exports.postAgregarOrganizacion = (req,res)=>{
  Organization.findByPk(req.body.name)
  .then(resultado=>{
      if(resultado){
        res.send("NO");
      }else{
        Organization.create({
          name: req.body.name,
          tag: req.body.tag,
          description: req.body.description,
          password: req.body.password,
          phoneNumber: req.body.phoneNumber
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
  Organization.findByPk(req.body.name)
  .then(resultado=>{
      if(resultado){
          if(req.body.UserOrganizacion.password == resultado.password){
            res.send("YES");
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


exports.postListaProyectos = (req,res)=>{
  console.log(req.body);
  Organization.findByPk(req.body.name)
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};