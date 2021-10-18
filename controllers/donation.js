//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Donation = sequelize.models.Donation;
const path = require('path');


exports.getDonations = (req,res)=>{
    Donation.findAll({
            where: {
            UserEmail: req.body.Correo.email
            }
        })
        .then(registros=>{           
            res.json(registros);
            /*var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('DataTable.html',{
                personas:data,
                sesion:"Autorizado",
                hora:"14:00"
            });*/
        }).catch(error=>console.log(error));    
};

exports.postAgregarDonation= (req,res)=>{
    console.log(req.body);    
    Donation.create({
        quantity: req.body.quantity
    }).then(resultado=>console.log("Registro Usuario exitoso"))
      .catch(error=>console.log(error));
    res.send("Ok");
};