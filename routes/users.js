var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
//var Role = require('../_helpers/role');
var userController = require('../controllers/UserController')
/* GET users listing. *///getProduitByType

router.get('/',userController.getAllUsers);
router.post('/AddProduit',userController.createUser);
/*router.get('/getProduitByType',produitController.getProduitByType);

router.post('/AddProduit',authorize("Admin"),produitController.createProduit);
router.delete('/:id',produitController.deleteProduit);
router.get('/:id',authorize("Admin"),produitController.getById);
router.put('/:id',authorize("Admin"),produitController.updateProduit);
router.get('/getByIdCompanyProduit/:id',produitController.getByIdCompanyProduit);
//router.get('/:id',companyController.updateCompany);*/

module.exports = router;
