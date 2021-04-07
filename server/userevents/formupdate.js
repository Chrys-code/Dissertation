const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');


//////////////////////
// Saving user data
//////////////////////

router.post("/form", (req, res) => {
    const {
        userId, transport,
        departure, departure_year,
        departure_month, departure_day,
        arrival, arrival_year,
        arrival_month, arrival_day,
        children
    } = req.body;

    console.log(userId, transport,
        departure, departure_year,
        departure_month, departure_day,
        arrival, arrival_year,
        arrival_month, arrival_day,
        children
    )
    const arrivalTime = `${arrival_year}.${arrival_month}.${arrival_day}`;
    const departureTime = `${departure_year}.${departure_month}.${departure_day}`;

    if (!userId) {
        return res.send({
            success: false,
            message: "Error: Failed due to invalid user id.",
        });
    }

    if (!departure || !departureTime || !departure_year || !departure_month || !departure_day) {
        return res.send({
            success: false,
            message: "Error: Departure location & time cannot be blank.",
        });
    }

    if (!arrival || !arrivalTime || !arrival_year || !arrival_month || !arrival_day) {
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
                    location: departure,
                    time: departureTime
                },
                arrival: {
                    location: arrival,
                    time: arrivalTime
                },
                transport: transport,
                updated: Date.now()
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
