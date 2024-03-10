const express = require('express');
const router = express.Router();
const Reservation = require('../Models/reservationSchema');

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, date, time } = req.body;
        // Check if all required fields are provided
        if (!firstName || !lastName || !email || !phone || !date || !time) {
            return res.status(400).json({ error: "All fields are required" });
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        // Create a new reservation object
        const newReservation = new Reservation({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });
        // Save the reservation to the database
        const savedReservation = await newReservation.save();
        // Respond with the saved reservation
        res.status(201).json({ success: true, message: "Reservation saved successfully!", savedReservation });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;