const express = require('express');
const router = express.Router();

const detailsCtrl = require('../controllers/details'); //Require the reviews controller (yet to be created).

router.post('/flights/:id/details', detailsCtrl.create);

//POSt rout for /flights 
router.post('/', detailsCtrl.create);//Define the route we just identified for creating a review.

module.exports = router;