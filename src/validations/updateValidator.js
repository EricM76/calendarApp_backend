const { check } = require('express-validator');
const moment = require('moment');
moment.locale('es');



module.exports = [

  /*   check('title')
        .notEmpty().withMessage('El título es requerido'),

    check('start')
        .notEmpty().withMessage('La fecha de inicio es obligatoria')
        .isDate().withMessage('La fecha de inicio es inválida')
        .custom((value, { req }) => {
            if (moment(value).diff(moment(), 'days') < 0) {
                return false
            } else {
                return true
            }
        }).withMessage('La fecha de inicio tiene que ser una igual o posterior a la actual'),
    check('end')
        .notEmpty().withMessage('La fecha de finalización es obligatoria')
        .isDate().withMessage('La fecha de finalización es inválida')
        .custom((value, { req }) => {
            if (moment(value) < moment(req.body.start)) {
                return false
            } else {
                return true
            }
        }).withMessage('La fecha de finalización debe ser posterior a la fecha de inicialización'), */
]

