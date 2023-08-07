const {Router} = require('express');
const {check} = require ('express-validator');
const { login } = require('../controllers/auth.controller.js');
const { validateDocuments } = require('../middlewares/validate.document.js');

const router = Router();

router.post("/login",[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    validateDocuments
] , login );


module.exports = router;