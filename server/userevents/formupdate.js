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

    // sserId === token
    // For some reason cannot pass the value with another key:value pair from client???!!
    const sessionId = userId.split("=")[1];

    const arrivalTime = `${arrival_year}.${arrival_month}.${arrival_day}`;
    const departureTime = `${departure_year}.${departure_month}.${departure_day}`;

    if (!sessionId) {
        return res.send({
            success: false,
            message: "Internal Error",
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

    if (!transport) {
        return res.send({
            success: false,
            message: "Transprot cannot be blank",
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
    })
});



module.exports = router;
