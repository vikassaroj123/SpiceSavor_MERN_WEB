const express = require('express');
const app = express();
require('dotenv').config();

// Use for frontend connect
const cors = require('cors');
const corsOptions = {
    origin: 'https://spice-savor-mern-web.vercel.app/',
    credentials: true 
};
app.use(cors(corsOptions));

// Database connection
const db = require('./db'); 
// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Reservation routes
const reservationRoutes = require('./Routes/reservationRoute');
app.use('/reservation', reservationRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
