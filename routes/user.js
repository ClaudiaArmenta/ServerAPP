   
const express = require("express");
const userController = require('../controllers/user');
const userDonations = require('../controllers/donation');
const router = express.Router();

router.post('/agregarUsuario',userController.postAgregarUsuario);
router.post('/verificaUsuario',userController.postVerificaUsuario);

router.get('/registros',userDonations.getDonations);

router.post('/iniciarSesion',userController.postIniciarSesion);

module.exports =router;