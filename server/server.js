//////////////////////
// PACKAGES
//////////////////////
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv/config");

//////////////////////
// MODULES
//////////////////////
// Auth
const logout = require('./auth/logout');
const signin = require('./auth/signin');
const signup = require('./auth/signup');
const session = require('./auth/session');
// Event
const update = require('./userevents/update');


//////////////////////
// APP
//////////////////////
const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));


//////////////////////
// ROUTES
//////////////////////
// Auth
app.use("/api", signin);
app.use("/api", signup);
app.use("/api", session);
app.use("/api", logout);
// Events
app.use("/api", update);


//////////////////////
// CONNECT TO DATABASE
//////////////////////
mongoose.connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on('open', () => {
    console.log('Connected to Database')
});

// heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}


//////////////////////
// RUN PORT 8080
//////////////////////
const PORT = process.env.PORT || 8080;
app.listen(PORT)

