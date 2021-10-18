//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Proyecto = sequelize.models.Project;
const path = require('path');

exports.postAgregarProyecto = (req,res)=>{
    
    Proyecto.findAll({
        where: {
          ProjectName: req.body.UserData.ProjectName
        }
      })
  .then(resultado=>{
      if(resultado.legth == 0){        
        console.log(resultado.length);
        res.send(resultado);
      }else{
        Proyecto.create({
          ProjectName: req.body.UserData.ProjectName,
          description: req.body.UserData.description,
          UserEmail: req.body.UserData.userEmail,

          OrganizationName: req.body.UserData.organization
      }).then(res.send("YES"))
        .catch(error=>console.log(error));
      }
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};

exports.postListaProyectosPorAceptar = (req,res)=>{
  console.log(req.body);
  Proyecto.findAll({
    where: {
      approbed: false
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

exports.postListaProyectosAceptados = (req,res)=>{
  console.log(req.body);
  Proyecto.findAll({
    where: {
      approbed: true
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

exports.postAceptarProyecto = (req,res)=>{
  console.log(req.body);
  Proyecto.update(
    { approbed: true},
    { where: { ProjectName: req.body.UserData.ProjectName}}    
  )
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};


exports.postRechazarProyecto = (req,res)=>{
  console.log(req.body.UserData.ProjectName);
  Proyecto.destroy(
    { where: { ProjectName: req.body.UserData.ProjectName}}    
  )
  .then(resultado=>{
      res.json(resultado)
  })
  .catch(error=>{
      console.log(error);
      res.send(error);
  })
};