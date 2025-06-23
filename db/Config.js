// Database connection
require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGO_URL ;

mongoose.connect(process.env.MONGO_URI);
