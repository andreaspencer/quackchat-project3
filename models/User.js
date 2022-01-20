const { Schema, model } = require('mongoose');

//function to validate email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        min: 5
    },
    blurb: {
     type: String,
     trim: true
    },
},
{
    toJSON: {
        virtual: true,
        getters: true
    },
}
);

const User = model('User', UserSchema);

module.exports = User;
