const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstname: {
        type: String,
        default: "",
        required: true,
    },
    lastname: {
        type: String,
        default: "",
        required: true,
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    },
    children: {
        type: Boolean,
        default: false,
        required: true
    },
    departure: {
        type: { location: String, time: Date },
        default: { location: "", time: "" },
        required: { location: true, time: true }
    },
    arrival: {
        type: { location: String, time: Date },
        default: { location: "", time: "" },
        required: { location: true, time: true }
    },
    transport: {
        type: Array,
        default: [],
        required: true
    },
    links: {
        type: Array,
        default: [],
        required: true
    },
    updated: {
        type: Date,
        default: "",
        required: true
    }
})


userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);