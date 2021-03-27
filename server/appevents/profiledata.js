const express = require("express");
const router = express.Router();
const User = require("../models/userschema");

//////////////////////
// GET PROFILE DATA
//////////////////////
router.get("/profile", (req, res, next) => {
    const { query } = req;
    const { userId } = query;

    if (!userId) {
        return res.send({
            success: false,
            message: "Error: Failed due to invalid user id.",
        });
    }

    User.find(
        {
            _id: userId,
        },
        (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Failed to get profile data, ${err}`,
                });
            }

            const user = users[0];
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: "Error: Profile not found!"
                })
            } else {
                return res.send({
                    success: true,
                    message: "Success: User successfully retrieved",
                    children: user.children,
                    departure: user.departure,
                    arrival: user.arrival,
                    transport: user.transport,
                    updated: user.updated,
                });
            }

        }
    );
});
module.exports = router;
