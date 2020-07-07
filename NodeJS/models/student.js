const mongoose = require('mongoose');

var Studnet = mongoose.model('students',{
    name: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    confirm_password: { type: String }

}
);

module.exports = { Studnet };