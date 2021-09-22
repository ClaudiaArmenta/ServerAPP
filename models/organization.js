 //Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

 //crea tabla Organitation
 const Organization = (sequelize)=>{
    sequelize.define('Organization',{
        //Atributos
            name :{
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            tag :{
                type: Sequelize.STRING,
                allowNull: false
            },
            description :{
                type: Sequelize.STRING,
                allowNull: false
            },
            password :{
                type: Sequelize.STRING,
                allowNull: false
            },
        });
 }
 
 module.exports = Organization;