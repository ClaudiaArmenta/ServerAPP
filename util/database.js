//Configuración de sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relaciones');

//Asignacion de valores de la BD
const nombreDB = "appBD";
const usuarioDB = 'sa';
const passwordDB = 'Password1234$';
const hostDB = 'localhost';
const dialectoDB= 'mssql';

const sequelize = new Sequelize(nombreDB,usuarioDB,passwordDB,{
    host: hostDB,
    dialect:dialectoDB,
    dialectOptions:{
        options:{
            useUTC: false,
            dataFirst: 1
        }
    },
    define:{
        timestamps: false,
        freezeTableName: true
    }
});

//Cargar los modelos
const modelDefiners = [
    require('../models/user'),
    require('../models/donation'),
    require('../models/monthlyDonation'),
    require('../models/organization'),
    require('../models/userdata')
];

//Vincular el objeto de conexion con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}
//Construir las relaciones
applyRelations(sequelize);


//exportando el objeto sequelize
module.exports = sequelize;