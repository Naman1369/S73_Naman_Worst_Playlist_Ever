const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./database');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON

// Connect to MongoDB
connectDB();   //comment this is not using mongodb  yet

// Routes
app.use('/api', routes);

// Ping Route
app.get('/ping', (req, res) => {
    res.json({ message: "Pong", status: "success" });
});

// Home Route
app.get('/', (req, res) => {
    res.send("<h1>Head to /ping or /api/songs!</h1>");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
