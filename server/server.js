//////////////////////
// PACKAGES
//////////////////////
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const session = require("express-session")
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const server = next({ dev })  /*, dir: path.join(__dirname, '../')*/
const handle = server.getRequestHandler()
require("dotenv").config({ path: '../keys.env' })

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
mongoose.connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

/*
mongoose.connection.on('open', () => {
    console.log('Connected to Database')
});
*/

server.prepare().then(() => {
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
    // Auth
    app.use("/api", signin);
    app.use("/api", signup);

    app.use(session({
        secret: 'something amazingly strong secret',
        resave: true,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 7200000
        }
    }))
    // Session Verification from Client side
    app.use("/api", verify);

    // Signout
    app.use("/api", signout);

    // App Events
    app.use("/api", profiledata);
    app.use("/api", linkdata);
    // User Events
    app.use("/api", formupdate);
    app.use("/api", linkupdate);

    app.get('*', (req, res) => {
        return handle(req, res)
    })

    //////////////////////
    // RUN PORT 8080
    //////////////////////
    const PORT = process.env.PORT || 8080;
    app.listen(PORT)
})