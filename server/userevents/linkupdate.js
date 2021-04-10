const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');

//////////////////////
// Saving user data
//////////////////////

router.post("/links", (req, res, next) => {
    const { body } = req;
    const { token, link, head, text } = body;

    const sessionId = token.split("=")[1];
    if (!sessionId) {
        return res.send({
            success: false,
            message: "Error: Failed to identify session",
        });
    }

    if (!link) {
        return res.send({
            success: false,
            message: "Website URL cannot be empty",
        });
    }

    if (!head) {
        return res.send({
            success: false,
            message: "List item must have a title",
        });
    }
    if (!text) {
        return res.send({
            success: false,
            message: "List item must have a description",
        });
    }
    UserSession.find({
        _id: sessionId,
        isValid: true,
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: `Internal Error`,
            });
        }

        const session = sessions[0];
        if (sessions.length != 1) {
            return res.send({
                sucess: false,
                message: `Internal Error`,
            });
        }
        console.log("uId:" + session.userId)
        User.findOneAndUpdate(
            {
                _id: session.userId,
            },
            {
                $push: {
                    links: {
                        link: link,
                        head: head,
                        text: text,
                    }
                },
                $set: {
                    updated: Date.now()
                },
            },
            null,
            (err) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: `Error: Failed to update`,
                    });
                }

                return res.send({
                    success: true,
                    message: "Saved!",
                });
            }
        );

    })
});
module.exports = router;

