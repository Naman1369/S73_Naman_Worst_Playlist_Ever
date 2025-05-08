const mongoose = require('mongoose');
require('dotenv').config();

let dbStatus = 'Not connected';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        dbStatus = 'Connected to MongoDB';
        console.log('MongoDB Connected');
    } catch (err) {
        dbStatus = 'Failed to connect to MongoDB';
        console.error('MongoDB Connection Error:', err);
    }
};

module.exports = { connectDB, dbStatus: () => dbStatus };
