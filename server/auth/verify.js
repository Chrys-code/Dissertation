//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');

//////////////////////
// VERIFY SESSION
//////////////////////
router.post("/verify", (req, res) => {

    const { token } = req.body

    UserSession.find({
        _id: token,
        isValid: true,
    },
        (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Internal server error, ${err}`,
                });
            }

            if (sessions.length != 1) {
                return res.send({
                    sucess: false,
                    message: `Error: Internal server error, ${err}`,
                });
            }

            User.find({
                _id: sessions[0].userId
            }, (err, users) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: `Error: Internal server error during retrieving user, ${err}`,
                    });
                }

                const user = users[0];
                if (users.length != 1) {
                    return res.send({
                        success: false,
                        message: `Error: Internal server error during retrieving user, ${err}`,
                    });
                }

                return res.status(200).send({
                    user: {
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        departure: user.departure,
                        arrival: user.arrival,
                        transport: user.transport,
                        links: user.links
                    }
                });
            })
        })
});

module.exports = router;
