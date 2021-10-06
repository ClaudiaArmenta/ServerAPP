
const express = require("express");
const userController = require('../controllers/user');
const userDonations = require('../controllers/donation');
const router = express.Router();


//Registro e inicio Sesión
router.post('/agregarUsuario',userController.postAgregarUsuario);
router.post('/iniciarSesion',userController.postIniciarSesion);

router.get('/registros',userDonations.getDonations);



router.post('/forgot', userController.forgotPassword);

module.exports =router;
