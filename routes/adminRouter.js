const express = require('express');
const { 
    viewBookings,
    deleteBookings
 } = require('../controllers/adminController');


const router = express.Router()


router.get("/viewBookings", viewBookings);
router.delete("/deleteBookings", deleteBookings);

module.exports = router;