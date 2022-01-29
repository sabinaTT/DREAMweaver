require('dotenv').config()
require('./models/index')
require('./config/passport')
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')


const routes = require('./routes');
const app = express();


app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

app.use(
    session({
        secret: 'DREAMweaver',
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());


// app.use('/', routes.dreams)


const PORT = 3000;


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, function() {
    console.log(`dreams live on http://localhost:${PORT}`)
})