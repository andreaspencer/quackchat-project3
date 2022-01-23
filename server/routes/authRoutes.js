
const passport = require("passport");

// const router = require('express').Router();


// router.use((req, res) => {
//   res.status(404).send('<h1>😝 404 Error!</h1>');
// });





module.exports = app => {

app.get("/auth/google", 
passport.authenticate("google", {
  scope: ["profile", "email"]
}));

//"Hey, Passport! Authenticate this Strategy!"
app.get("/auth/google/callback", passport.authenticate("google"));
};