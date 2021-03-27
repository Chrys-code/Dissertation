const express = require("express");
const router = express.Router();
const User = require("../models/userschema");

//////////////////////
// GET PROFILE DATA
//////////////////////
router.get("/linkdata", (req, res, next) => {
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
                    message: "Success: User data successfully retrieved",
                    links: user.links,
                });
            }
        }
    );
});
module.exports = router;
