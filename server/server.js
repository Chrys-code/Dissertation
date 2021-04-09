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
const signout = require('./auth/signout');
const signin = require('./auth/signin');
const signup = require('./auth/signup');
const verify = require('./auth/verify');
// App Event
const profiledata = require('./appevents/profiledata');
const linkdata = require('./appevents/linkdata');
// UserEvent
const formupdate = require('./userevents/formupdate');
const linkupdate = require('./userevents/linkupdate');

//////////////////////
// CONNECT TO DATABASE
//////////////////////
mongoose.connect(process.env.DB_KEY || "mongodb+srv://Lancer:R94619422n@cluster0.jzzub.mongodb.net/Dissproject?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on('open', () => {
    console.log('Connected to Database')
});


//////////////////////
// APP
//////////////////////
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


//////////////////////
// ROUTES
//////////////////////
// Session Verification from Client side
app.use("/api", verify);
// Auth
app.use("/api", signin);
app.use("/api", signup);
app.use("/api", signout);

// App Events
app.use("/api", profiledata);
app.use("/api", linkdata);
// User Events
app.use("/api", formupdate);
app.use("/api", linkupdate);

/*
// heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}
*
* This is for REACT not Next !!!
*/

//////////////////////
// RUN PORT 8080
//////////////////////
const PORT = process.env.PORT || 8080;
app.listen(PORT)

