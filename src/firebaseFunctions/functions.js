const functions = require("firebase-functions");

exports.signupFuntion = functions.auth.user().onCreate((user) => {
  console.log(user.email, user.uid, "user created");
});
