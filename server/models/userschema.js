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
        required: false
    },
    departure: {
        type: { location: String, time: Date },
        default: { location: "", time: "" },
        required: { location: false, time: false }
    },
    arrival: {
        type: { location: String, time: Date },
        default: { location: "", time: "" },
        required: { location: false, time: false }
    },
    transport: {
        type: String,
        default: "",
        required: false
    },
    links: {
        type: Array,
        default: [],
        required: false
    },
    updated: {
        type: Date,
        default: "",
        required: false
    }
})


userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);