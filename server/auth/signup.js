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
            message: "Error: Firstname cannot be blank",
        });
    }
    if (!lastname) {
        return res.send({
            success: false,
            message: "Error: Lastname cannot be blank.",
        });
    }

    if (!email) {
        return res.send({
            success: false,
            message: "Error: Email cennot be blank.",
        });
    }

    if (!password) {
        return res.send({
            success: false,
            message: "Error: Password cannot be blank.",
        });
    }

    User.find(
        {
            email: email
        },
        (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `Error: Internal server error, please try again later, ${err}`,
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: "Error: Email is are already in use",
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
                        message: `Error: Failed to create account, please try again later, ${err}`,
                    });
                }
                return res.send({
                    success: true,
                    message: "Success: Account created successfully",
                });
            });
        }
    );
});

module.exports = router;
