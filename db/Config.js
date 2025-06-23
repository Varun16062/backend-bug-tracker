// Database connection
require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGO_URI ;
console.log(URL)
mongoose.connect(URL);
