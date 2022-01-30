const mongoose = require('mongoose');
const db = mongoose.connection;
// require('dotenv').config();


mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log(`mongodb successfully connected ${db.host}: ${db.port}`)
    }) 
    .catch((error) => {
        console.log(`mongodb connection failed ${error}`)
    })

module.exports = {
    Dreamer: require('./Dreamer'),
    ActiveDream: require('./ActiveDream'),
    InactiveDream: require('./InactiveDream'),
    Comment: require('./Comment')
}