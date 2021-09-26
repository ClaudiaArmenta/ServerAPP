//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Donation = sequelize.models.donation;
const path = require('path');


exports.getDonations = (req,res)=>{
    //Simular consulta
    //query
    //SELECT * from usuario;
    Donation.findAll({
            where: {
            UserIdUser: req.UserIdUser
            }
        })
        .then(registros=>{           
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('DataTable.html',{
                personas:data,
                sesion:"Autorizado",
                hora:"14:00"
            });
        })    
};

exports.postAgregarDonation= (req,res)=>{
    console.log(req.body);    
    Usuario.create({
        registrationDate : "2002-12-10"
    }).then(resultado=>console.log("Registro Usuario exitoso"))
      .catch(error=>console.log(error));
    res.send("Ok");
};