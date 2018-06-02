const mongoose = require('mongoose');
const validator = require('validator');
var bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: [{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email!'
        }]
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },


});

const User = mongoose.model('User', UserSchema);

const auth = (email, password) => {
    return new Promise((resolve, reject) => {
        User.findOne({email: email}).then(user => {
            bcrypt.compare(password, user.password, (err, res) => resolve({auth: res, isInDb: true}))
        })
            .catch(err => {
                resolve({auth: false, isInDb: false})
            });
    })
};

const hash = (password, callback) => {
    bcrypt.hash(password, saltRounds, (err, hash) => callback(err, hash));
};

const logIn = (userData, callback) => {

    auth(userData.email, userData.password).then(auth => {
        console.log('auth', auth)
        if (!auth.isInDb) {
            hash(userData.password, (err, hash) => {
                userData.password = hash;
                User.create(userData, (err, user) => {
                    if (err) console.log('error from mongodb ', err.message);

                    return callback(err, {
                        isNewUser: true,
                        auth: auth.auth,
                        errorMessage: err ? err.message : null
                    })
                });
            });
        } else {
            if (auth.auth) {
                return callback(null, {
                    isNewUser: false,
                    auth: auth.auth,
                    errorMessage: null
                })
            } else {
                return callback(null, {
                    isNewUser: false,
                    auth: auth.auth,
                    errorMessage:  null
                })
            }

        }

    });


};


module.exports = {
    User,
    logIn

};