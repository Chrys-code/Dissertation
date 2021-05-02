const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession')

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
        children, sid
    } = req.body;

    if (!sid) {
        return res.send({
            success: false,
            message: "Invalid session",
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

    UserSession.find({
        _id: sid
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: `Error: Internal server error`,
            });
        }

        const session = sessions[0]
        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Internal server error'
            })
        }

        // If session is set get user data
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
})

module.exports = router;
