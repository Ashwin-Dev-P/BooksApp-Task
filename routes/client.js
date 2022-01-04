const express = require('express')
const router = express.Router();

//Controller modules
var client_controller = require('../controllers/clientController');

//Get all users
router.get('/', client_controller.client_list)


module.exports = router;