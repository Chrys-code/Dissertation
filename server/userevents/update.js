const express = require("express");
const router = express.Router();
const User = require("../models/userschema");
const UserSession = require('../models/usersession');


//////////////////////
// Saving user data
//////////////////////

router.post("/form", (req, res, next) => {
    const { body } = req;
    const { name, password, schoolId } = body;

    if (!schoolId) {
        return res.send({
            success: false,
            message: "Error: Organization cannot be blank.",
        });
    }

    if (!name) {
        return res.send({
            success: false,
            message: "Error: Name cannot be blank.",
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
            name: name,
            schoolId: schoolId,
        },
        (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: "Error: Internal server error",
                });
            }
            if (users.length != 1) {
                return res.send({
                    sucess: false,
                    message: "Error: Invalid username",
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    sucess: false,
                    message: "Error: Invalid Username or Password!",
                });
            }

            const newUserSession = new UserSession();
            newUserSession.userId = user._id;
            newUserSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        sucess: false,
                        message: "Error: Internal server error when trying to create User session.",
                    });
                }

                return res.send({
                    success: true,
                    message: "Valid sign in",
                    token: doc._id,
                    id: user._id,
                    schoolId: user.schoolId
                });
            });
        }
    );
});
module.exports = router;
