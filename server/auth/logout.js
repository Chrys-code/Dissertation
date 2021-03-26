//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');


//////////////////////
// LOGOUT
//////////////////////
router.get("/logout", (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate(
        {
            _id: token,
            isDeleted: false,
        },
        {
            $set: {
                isDeleted: true,
            },
        },
        null,
        (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: "Error: User session could not be terminated",
                });
            }

            return res.send({
                success: true,
                message: "User session successfully terminated",
            });
        }
    );
});

module.exports = router;
