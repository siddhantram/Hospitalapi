const express = require('express');
const port = 6000;
const db = require('./confing/mongoose');

const passport = require('passport');
const passportJWT = require('./confing/passport_jwt_strategy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});
