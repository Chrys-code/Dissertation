const express = require("express");
const router = express.Router();
const User = require("../models/userschema");

//////////////////////
// Saving user data
//////////////////////

router.post("/links", (req, res, next) => {
    const { body } = req;
    const { userId, links } = body;

    if (!userId) {
        return res.send({
            success: false,
            message: "Error: Failed due to invalid user id.",
        });
    }

    if (!links) {
        return res.send({
            success: false,
            message: "Error: No links in the list",
        });
    }

    User.findOneAndUpdate(
        {
            _id: userId,
        },
        {
            $set: {
                links: links,
                updated: Date.new()
            },
        },
        null,
        (err) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Failed to update, ${err}`,
                });
            }

            return res.send({
                success: true,
                message: "Success: User successfully updated",
            });
        }
    );
});
module.exports = router;
