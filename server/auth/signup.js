//////////////////////
// PACKAGES
//////////////////////
const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');

//////////////////
// SIGNUP
//////////////////
router.post("/signup", (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname) {
        return res.send({
            success: false,
            message: "Firstname cannot be blank",
        });
    }
    if (!lastname) {
        return res.send({
            success: false,
            message: "Lastname cannot be blank.",
        });
    }

    if (!email) {
        return res.send({
            success: false,
            message: "Email cannot be blank.",
        });
    }

    if (!password) {
        return res.send({
            success: false,
            message: "Password cannot be blank.",
        });
    }

    User.find(
        {
            email: email
        },
        (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Internal Error`,
                });
            } else if (users.length != 0) {
                return res.send({
                    success: false,
                    message: "Email is are already in use",
                });
            }

            //Save new user
            const newUser = new User();
            newUser.firstname = firstname;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: `Failed to create account`,
                    });
                }
                // Open a tracked session in the DataBase
                const newSession = new UserSession();
                newSession.userId = newUser._id;
                newSession.save((err, doc) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: `Failed to create session, try sign in`,
                        });
                    }
                    //session.userId = user._id
                    //session.sessionId = doc._id
                    return res.status(200).send({
                        success: true,
                        token: doc._id
                    })
                });
            });
        }
    );
});

module.exports = router;
