//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//crea tabla UserData
const UserData= (sequelize)=>{

    sequelize.define('UserData',{
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
            birthday:{
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            hasMonthlyDonation :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            totalDonation :{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            nivel:{
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
}
    module.exports = UserData;
