//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');

//crea tabla User
const User= (sequelize)=>{
    sequelize.define('User',{

    //Atributos
        idUser :{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        registrationDate :{
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    });
}
module.exports = User;