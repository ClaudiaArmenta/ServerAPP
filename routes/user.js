
const express = require("express");
const userController = require('../controllers/user');
const userDonations = require('../controllers/donation');
const organizationController = require('../controllers/organization');
const router = express.Router();


//Registro e inicio Sesión --> Usuario
router.post('/agregarUsuario',userController.postAgregarUsuario);
router.post('/iniciarSesion',userController.postIniciarSesion);

//Registro e inicio sesion --> Organizacion
router.post('/agregarOrganizacion',organizationController.postAgregarOrganizacion);
router.post('/iniciarSesionOrganizacion',organizationController.postIniciarSesion);


//Donaciones
router.post('/registros',userDonations.getDonations);



router.post('/forgot', userController.forgotPassword);

module.exports =router;
