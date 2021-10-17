
const express = require("express");
const userController = require('../controllers/user');
const userDonations = require('../controllers/donation');
const organizationController = require('../controllers/organization');
const router = express.Router();


//Registro e inicio Sesión --> Usuario
router.post('/agregarUsuario',userController.postAgregarUsuario);
router.post('/iniciarSesion',userController.postIniciarSesion);
router.post('/validarCorreo',userController.postValidarCorreo);
router.post('/updatePassword',userController.postUpdatePassword);

//Registro e inicio sesion --> Organizacion
router.post('/agregarOrganizacion',organizationController.postAgregarOrganizacion);
router.post('/iniciarSesionOrganizacion',organizationController.postIniciarSesion);
router.post('/listaProyectosAceptados',organizationController.postListaProyectosAceptados);
router.post('/listaProyectosPorAceptar',organizationController.postListaProyectosPorAceptar);
router.post('/aceptarProyecto',organizationController.postAceptarProyecto);
router.post('/rechazarProyecto',organizationController.postRechazarProyecto);

//Donaciones
router.post('/registros',userDonations.getDonations);


//Javi
router.post('/forgot', userController.forgotPassword);

module.exports =router;
