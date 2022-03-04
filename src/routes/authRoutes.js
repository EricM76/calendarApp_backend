const {Router} = require('express');
const router = Router();

const {userCreate, userLogin} = require('../controllers/authController')

const registerValidator = require('../validations/registerValidator');
const validationFields = require('../middlewares/validationFields');
const authValidator = require('../validations/authValidator');

/* api/auth */
router
  .post('/',authValidator, validationFields, userLogin)
  .post('/new',registerValidator, validationFields, userCreate)

module.exports = router;
