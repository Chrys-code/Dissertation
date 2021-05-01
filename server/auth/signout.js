//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const UserSession = require('../models/usersession');
const session = require("express-session")


//////////////////////
// LOGOUT
//////////////////////
router.post("/signout", (req, res, next) => {
    const { body } = req;
    UserSession.findOneAndUpdate(
        {
            _id: session.sessionId,
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

            // delete session identifiers manually
            session.sessionId = null
            session.userId = null

            return res.send({
                success: true,
                message: "Success: Session successfully terminated",
            });
        }
    );
});

module.exports = router;
