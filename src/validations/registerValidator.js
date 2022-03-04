const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),

    check('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),

    check('password')
        .notEmpty().withMessage('El password es obligatorio')
        .isLength({min: 6}).withMessage('Se require un mínimo de 6 caracteres')
]