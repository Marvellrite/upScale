const bookingModel = require("../models/bookings")

const createBooking = async(req, res)=>{
    let message = req.body.message;
    let preview = message.split(" ").slice(0, 18).join(" ");
    req.body.preview = preview;
    await bookingModel.create(req.body);
    res.status(201).json({msg:"Booking Created successfully"});
}


module.exports = {
    createBooking
}