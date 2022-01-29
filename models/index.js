const mongoose = require('mongoose');
const db = mongoose.connection;
const dotenv = require('dotenv').config();


mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log(`mongodb successfully connected ${db.host}: ${db.port}`)
    }) 
    .catch((error) => {
        console.log(`mongodb connection failed ${error}`)
    })

module.exports = {
    
}