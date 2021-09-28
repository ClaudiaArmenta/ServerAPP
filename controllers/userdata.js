//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const UserData = sequelize.models.UserData;
const path = require('path');
const { RequestError } = require('tedious');


exports.postAgregarUsuarioData = (req,res)=>{    
    console.log(req.body);
    /*UserData.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        salt: req.body.salt,
        birthday: req.body.birthday,
        hasMonthlyDonation: req.body.hasMonthlyDonation,
        totalDonation: req.body.totalDonation,
        levell: req.body.levell,
        confirmacionCorreo: req.body.confirmacionCorreo,
        UserIdUser: req.body.UserIdUser
    }).then(resultado=>console.log("Registro UserData exitoso"))
      .catch(error=>console.log(error));*/

    res.json({ username: 'UwU' })

    //res.send("UwU");
};