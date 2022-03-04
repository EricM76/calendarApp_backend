const {check} = require('express-validator');

module.exports = [
  
    check('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),

    check('password')
        .notEmpty().withMessage('El password es obligatorio')
]