
//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Project = (sequelize)=>{
    sequelize.define('Project',{
        //Atributos
            idProject :{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            ProjectName :{
                type: Sequelize.STRING,
                allowNull: false
            },
            description :{
                type: Sequelize.STRING,
                allowNull: false
            },
            RegistrationDate :{
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            approbed :{
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
    });
}
module.exports = Project; 