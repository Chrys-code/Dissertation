const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');


//////////////////////
// Saving user data
//////////////////////

router.post("/form", (req, res, next) => {
    const { body } = req;
    const { userId, departureLocation, departureTime, arrivalLocation, arrivalTime, children, transport } = body;

    if (!userId) {
        return res.send({
            success: false,
            message: "Error: Failed due to invalid user id.",
        });
    }

    if (!departureLocation || !departureTime) {
        return res.send({
            success: false,
            message: "Error: Departure location & time cannot be blank.",
        });
    }

    if (!arrivalLocation || !arrivalTime) {
        return res.send({
            success: false,
            message: "Error: Arrival location & time cannot be blank.",
        });
    }

    if (!children) {
        return res.send({
            success: false,
            message: "Error: Please tell us wheter you travel with children",
        });
    }

    if (!transport) {
        return res.send({
            success: false,
            message: "Error: Please provide travel information: public transport name and/or number",
        });
    }

    User.findOneAndUpdate(
        {
            _id: userId,
        },
        {
            $set: {
                children: children,
                departure: {
                    location: departureLocation,
                    time: departureTime
                },
                arrival: {
                    location: arrivalLocation,
                    time: arrivalTime
                },
                transport: transport,
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
