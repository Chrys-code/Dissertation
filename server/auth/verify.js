//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const session = require("express-session")

//////////////////////
// VERIFY SESSION
//////////////////////
router.post("/verify", (req, res) => {
    // If session is not set

    if (!session.sessionId || !session.userId) {
        return res.send({
            success: false,
            message: `Invalid session`,
        });
    }

    // If session is set get user data
    User.find({
        _id: session.userId
    }, (err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: `Error: Internal server error during retrieving user`,
            });
        }

        const user = users[0];
        if (users.length != 1) {
            return res.send({
                success: false,
                message: `Error: Internal server error during retrieving user`,
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

module.exports = router;
