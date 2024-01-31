const express = require('express');
const { 
    createBooking
 } = require('../controllers/clientController.js');


const router = express.Router()


router.post("/createBooking", createBooking);

module.exports = router;