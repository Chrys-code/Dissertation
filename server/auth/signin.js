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

    const { body } = req;
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

                return res.status(200).send({
                    success: true,
                    token: doc._id
                })
            });
        }
    );
});

module.exports = router;
