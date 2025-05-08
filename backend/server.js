const express = require('express');
const { connectDB, dbStatus } = require('./database');
const routes = require('./routes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
connectDB();

app.use('/api', routes)

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
