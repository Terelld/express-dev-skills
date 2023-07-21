const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets') 

// GET /performers/new (new functionality)
router.get('/:id/new', ticketsCtrl.new);
// POST /performers (create functionality)
// router.post('/tickets', ticketsCtrl.create);

router.post('/:id', ticketsCtrl.show);

router.post('/:id/new', ticketsCtrl.create);

module.exports = router;





