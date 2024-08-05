//****ImportingPackages*******//
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const session = require('express-session');

dotenv.config();
const port = process.env.PORT || 6000;


//**PassportGoogleSetup******//
const passport = require("./config/passport.js");


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());


//***RoutesConfig****//
const authRoutes = require('./routes/authRoute.js');
app.use("/",authRoutes);




//***Listening*****//
app.listen(port, () => { console.log(`Running on Port ${port}`) })