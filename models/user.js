//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//crea tabla UserData
const User= (sequelize)=>{

    sequelize.define('User',{
        //Atributos
            email :{
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            name :{
                type: Sequelize.STRING,
                allowNull: false
            },
            password :{
                type: Sequelize.STRING,
                allowNull: false
            },
            salt :{
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber :{
                type: Sequelize.STRING,
                allowNull: false
            },
            dateOfBirth :{
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            dateOfRegistration :{
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            hasMonthlyDonation :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            totalDonation :{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            levell:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        });
}
    module.exports = User;
