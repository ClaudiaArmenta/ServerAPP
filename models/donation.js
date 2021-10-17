//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//crea tabla Donation
const Donation=(sequelize)=>{

    sequelize.define('Donation',{
        //Atributos
            idDonation :{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            quantity :{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            donationDate :{
                type: Sequelize.DATEONLY,
                allowNull: true,
                defaultValue: new Date()
            },
            taxDeducibe :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            descripcion :{
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: false
            },
            idEmail:{
                type: Sequelize.STRING,
                allowNull: false,
            }
        });
    }
module.exports = Donation;