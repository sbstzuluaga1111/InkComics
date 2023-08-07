const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.document.js');


const router = Router();

router.get("/", getUsers);

router.post("/",[
        check('nombre', 'Nombre no es valido').not().isEmpty(),
        check('password', 'Password debe ser de minimo 6 letras').isLength({min :6}),
        check('email', 'El email no es valido').isEmail(),
        check('email').custom(emailExiste ),
        check('rol').custom(isValidRole),
        validateDocuments
] ,postUsers);

router.delete("/:id", [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( userExistsById ),
    validateDocuments
], deleteUsers );

router.put("/:id",
[
        check('id', 'No es un ObjectID MongoDB válido').isMongoId(),
        check('id').custom( userExistsById ),
        check('rol').custom(isValidRole),
        validateDocuments
    ], putUsers );


module.exports = router;