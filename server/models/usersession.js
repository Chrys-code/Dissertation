const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSessionSchema = new Schema({
    userId: {
        type: String,
        default: "",
        required: true
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    terminated: {
        type: Date,
        default: "",
    },
    isValid: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('UserSession', userSessionSchema);