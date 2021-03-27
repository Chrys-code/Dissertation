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
router.get("/verify", (req, res, next) => {
    const { query } = req;
    const { token } = query;
    UserSession.find(
        {
            _id: token,
            isValid: true,
        },
        (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: "Error: Invalid Token!",
                });
            }

            const session = sessions[0];
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: "Error: Session not found!",
                });
            } else {
                return res.send({
                    success: true,
                    userId: session.userId,
                    message: "Success: Succesful verification!",
                });
            }
        }
    );
});


module.exports = router;
