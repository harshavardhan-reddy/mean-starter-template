var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var uuid = require('node-uuid');
var logger = require('tracer').colorConsole();


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var options = {
    minimize: false,
    timestamps: true
}

var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String,
        mobile: String,
        passwordToken: String
    },
    details: {
        first_name: String,
        last_name: String,
        date_of_birth: Date
    }
}, options);

//storing password in a encrypted format 
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    if (this.local.password && password) {
        return bcrypt.compareSync(password, this.local.password);
    } else {
        return false;
    }
}

userSchema.methods.generateNewPasswordToken = function() {
    return uuid.v4();
}

exports.User = mongoose.model('User', userSchema);
