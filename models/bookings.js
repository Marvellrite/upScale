const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        default: Date.now()
    }
})

module.exports = mongoose.model("bookings", bookingSchema);