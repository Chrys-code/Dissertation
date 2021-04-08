//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');


//////////////////////
// SIGNIN
//////////////////////
router.post("/signin", (req, res) => {

    const { body, session } = req;
    const { email, password } = body;

    // Check if all data is supplied by the user
    // Create feedback
    if (!email) {
        return res.send({
            success: false,
            message: "Error: Email cannot be blank.",
        });
    }

    if (!password) {
        return res.send({
            success: false,
            message: "Error: Password cannot be blank.",
        });
    }

    // Find existing user
    User.find(
        {
            email: email,
        },
        (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Internal server error, ${err}`,
                });
            }
            if (users.length != 1) {
                return res.send({
                    sucess: false,
                    message: `Error: Internal server error, ${err}`,
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: "Error: Invalid Username or Password!",
                });
            }

            // If a user is found
            // Open a tracked session in the DataBase
            const newSession = new UserSession();
            newSession.userId = user._id;
            newSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: `Error: Failed to create session, ${err}`,
                    });
                }

                // Save new document id (from DataBase/session) to express session sessionId
                // Save user ID from database to session for operational tasks in the app
                session.sessionId = doc._id;
                session.user = user;
                // Sending the data back is not necessary and exposes sensitive data
                // Sending feedback is not necessary as user is automatically redirected
                return res.status(200).send({
                    success: true,
                })
            });
        }
    );
});

module.exports = router;
