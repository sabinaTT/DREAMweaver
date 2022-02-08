//require('dotenv').config() //comment out after locally testing
require('./models/index')
require('./config/passport')
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')



const routes = require('./routes');
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs')

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

app.use('/', routes.dreamers)
app.use('/', routes.oauth);
app.use('/dreams/', routes.dreams);
app.use('/comments/', routes.comments);


const PORT = process.env.PORT || 3000;





app.listen(PORT, function() {
    console.log(`dreams live on port: ${PORT}`)
})

//:D 