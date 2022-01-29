require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')


const routes = require('./routes')
const app = express()


app.use(express.static('public'))
app.use(methodOverride('_method'))


// app.use('/', routes.dreams)


const PORT = 3000;


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, function() {
    console.log(`dreams live on http://localhost:${PORT}`)
})

//:D 