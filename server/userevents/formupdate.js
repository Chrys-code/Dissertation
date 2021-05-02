const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const session = require("express-session")

//////////////////////
// Saving user data
//////////////////////

router.post("/form", (req, res) => {
    const {
        transport,
        departure, departure_year,
        departure_month, departure_day,
        arrival, arrival_year,
        arrival_month, arrival_day,
        children
    } = req.body;

    // If session is not set
    if (!session.sessionId || !session.userId) {
        return res.send({
            success: false,
            message: `Invalid session`,
        });
    }

    if (departure_month > arrival_month || departure_day > arrival_day) {
        return res.send({
            success: false,
            message: "Can't arrive before travel"
        })
    }

    const arrivalTime = `${arrival_year}.${arrival_month}.${arrival_day}`
    const departureTime = `${departure_year}.${departure_month}.${departure_day}`


    if (!transport) {
        return res.send({
            success: false,
            message: "Transprot cannot be blank",
        });
    }

    if (!departure || !departureTime || !departure_year || !departure_month || !departure_day) {
        return res.send({
            success: false,
            message: "Departure cannot be blank",
        });
    }

    if (!arrival || !arrivalTime || !arrival_year || !arrival_month || !arrival_day) {
        return res.send({
            success: false,
            message: "Arrival cannot be blank",
        });
    }

    if (!children) {
        return res.send({
            success: false,
            message: "Children cannot be unset",
        });
    }

    User.findOneAndUpdate({
        _id: session.userId,
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
        null, (err) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error`,
                });
            }
            return res.send({
                success: true,
                message: `Saved!`,
            });
        })
});



module.exports = router;
