const {Router} = require('express')
const router = Router();

const {all,create,update,remove} = require('../controllers/eventsController');
const eventValidator = require('../validations/eventValidator');
const validationFields = require('../middlewares/validationFields');
const validationJWT = require('../middlewares/validationJWT');

/* /api/events */

router.use(validationJWT)

router
    .get('/',all)
    .post('/',eventValidator, validationFields, create)
    .put('/:id',update)
    .delete('/:id',remove)


module.exports = router