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
          name: req.body.UserOrganizacion.name,
          tag: req.body.UserOrganizacion.tag,
          description: req.body.UserOrganizacion.description,
          password: req.body.UserOrganizacion.password,
          phoneNumber: req.body.UserOrganizacion.phoneNumber,
          email: req.body.UserOrganizacion.email
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


exports.postOrganizacionesPorAceptar = (req,res)=>{
  console.log(req.body);
  Organization.findAll({
    where: {
      state: false
    }
  })
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};

exports.postOrganizacionesAceptadas = (req,res)=>{
  console.log(req.body);
  Organization.findAll({
    where: {
      state: true
    }
  })
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};

exports.postAceptarOrganizacion = (req,res)=>{
  console.log(req.body);
  Organization.update(
    { state: true},
    { where: { name: req.body.name}}    
  )
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};


exports.postRechazarOrganizacion = (req,res)=>{
  console.log(req.body);
  Organization.destroy(
    { where: { Project: req.body.name}}    
  )
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};