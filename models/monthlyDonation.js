//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//crea tabla MonthlyDonation
const MonthlyDonation = (sequelize)=>{
    sequelize.define('MonthlyDonation',{
        //Atributos
            idMonthlyDonation :{
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            dontionMonth :{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            donationDay :{
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
}
    module.exports = MonthlyDonation; 