const express = require('express');
const { connectDB, dbStatus } = require('./database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/ping', (req, res) => {
    res.json({
        message: "Pong",
        status: "success",
    });
});

app.get('/', (req, res) => {
    res.send(`<h1>MongoDB Status: ${dbStatus()}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
