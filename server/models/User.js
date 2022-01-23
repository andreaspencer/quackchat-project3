const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },

    social: {
      googleProvider: {
        id: String,
        token: String
      }
    },

    password: {
      type: String,
      required: true,
      minlength: 5
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  },
// {
//   //google credentials
//   googleId: String
// }
);

//set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


userSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}


userSchema.statics.upsertGoogleUser = async function ({ accessToken, refreshToken, profile }) {
  const User = this;

  const user = await User.findOne({ 'social.googleProvider.id': profile.id });

  // no user was found, lets create a new one
  if (!user) {
      const newUser = await User.create({
          name: profile.displayName || `${profile.familyName} ${profile.givenName}`,
          email: profile.emails[0].value,
          'social.googleProvider': {
              id: profile.id,
              token: accessToken,
          },
      });

      return newUser;
  }
  return user;
};

const User = model('User', userSchema);

module.exports = User;
