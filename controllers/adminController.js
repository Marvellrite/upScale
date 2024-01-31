const bookingModel = require("../models/bookings")

const viewBookings = async(req, res)=>{
    const allBookings = await bookingModel.find({});
    res.status(200).json(allBookings);
}
const deleteBookings = async(req, res)=>{
    console.log("hello");
    const result = await bookingModel.deleteMany({_id:{$in:req.body}});
    console.log(result);
    console.log(req.body);
    res.status(204).json({msg:"Delete Operation Successful"});
}


module.exports = {
    viewBookings,
    deleteBookings
}