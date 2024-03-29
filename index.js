require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const cors = require('cors');


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());
app.use('/api', routes)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
    console.log('Server is running');
})