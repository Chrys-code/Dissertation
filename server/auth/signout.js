//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const UserSession = require('../models/usersession');

//////////////////////
// LOGOUT
//////////////////////
router.post("/signout", (req, res, next) => {
    const { sid } = req.body;
    UserSession.findOneAndUpdate(
        {
            _id: sid,
            isValid: true,
        },
        {
            $set: {
                terminated: Date.now(),
                isValid: false
            },
        },
        null,
        (err) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Failed to terminate session, ${err}`,
                });
            }

            return res.send({
                success: true,
                message: "Success: Session successfully terminated",
            });
        }
    );
});

module.exports = router;
