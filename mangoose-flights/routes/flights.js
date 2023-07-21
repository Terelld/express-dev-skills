var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');



//Get rout for /flights INDEX route
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

//POSt rout for /flights 
router.post('/', flightsCtrl.create);




module.exports = router;
