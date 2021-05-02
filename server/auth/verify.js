//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession')

//////////////////////
// VERIFY SESSION
//////////////////////
router.post("/verify", (req, res) => {
    const { sid } = req.body
    UserSession.find({
        _id: sid
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: `Error: Internal server error`,
            });
        }

        const session = sessions[0]
        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Internal server error'
            })
        }

        if (!session.userId) {
            return res.send({
                success: false,
                message: 'Error: Internal server error'
            })
        }

        User.find({
            _id: session.userId
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Internal server error`,
                });
            }

            const user = users[0];
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: `Error: Internal server error`,
                });
            }

            return res.status(200).send({
                user: {
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    departure: user.departure,
                    arrival: user.arrival,
                    children: user.children,
                    transport: user.transport,
                    links: user.links
                }
            });
        })
    });
})

module.exports = router;
