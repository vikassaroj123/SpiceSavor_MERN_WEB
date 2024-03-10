const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must contain at least 3 characters."],
        maxlength: [30, "First name cannot exceed 30 characters."]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must contain at least 3 characters."],
        maxlength: [30, "Last name cannot exceed 30 characters."]
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;