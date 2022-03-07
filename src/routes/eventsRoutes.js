const {Router} = require('express')
const router = Router();
const {check} = require('express-validator');

const {all,create,update,remove} = require('../controllers/eventsController');
const eventValidator = require('../validations/eventValidator');
const validationFields = require('../middlewares/validationFields');
const validationJWT = require('../middlewares/validationJWT');
const updateValidator = require('../validations/updateValidator');

/* /api/events */

router.use(validationJWT)

router
    .get('/',all)
    .post('/',eventValidator, validationFields, create)
    .put('/:id',
        updateValidator, 
        check('id', 'No es un id válido de mongoDB').isMongoId(),
        validationFields, 
        update)
    .delete('/:id',
        check('id', 'No es un id válido de mongoDB').isMongoId(),
        validationFields, 
        remove)
  


module.exports = router