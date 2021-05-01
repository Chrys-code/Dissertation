const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const session = require("express-session")

//////////////////////
// Saving user data
//////////////////////

router.post("/links", (req, res, next) => {
    const { body } = req;
    const { link, head, text } = body;
    if (!session.sessionId || !session.userId) {
        return res.send({
            success: false,
            message: `Invalid session`,
        });
    }
    if (!session.sessionId) {
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
});
module.exports = router;

