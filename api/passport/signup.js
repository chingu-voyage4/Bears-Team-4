/* 
 * SignUp functionality to the user using Local Strategy
 * First checks if the email or username already regestered in the DB,
 * Creates an user in the DB with user credentials 
 * We are hashig password using bcrypt-nodejs to make it secure
*/
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/Users");
var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport) {
  passport.use(
    "signup",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password,
        // we should override with email if we want to override it.
        usernameField: "email",
        passwordField: "password",
        // allows us to pass back the entire request to the callback
        passReqToCallback: true
      },
      function(req, email, password, done) {
        var findOrCreateUser = function() {
          // find a user in Mongo with provided username and email
          User.findOne({ $or: [{ email: email }] }, function(err, user) {
            // In case of any error, return using the done method
            if (err) {
              console.log("Error in SignUp: " + err);
              return done(err);
            }
            // already exists
            if (user) {
              console.log("User already exists with this email or username");
              const err = new Error("User Already Exist");
              return done(err);
            } else {
              // if there is no user with that email
              // create the user
              var newUser = new User();

              // set the user's local credentials
              newUser.email = email;
              newUser.username = email;
              newUser.password = createHash(password);
              newUser.firstName = email.split("@")[0]; // Temporaly using characters until "@" in email as First Name
              newUser.role = "user";

              // save the user
              newUser.save(function(err) {
                if (err) {
                  console.log("Error in Saving user: " + err);
                  // throw err;
                  return done(err);
                }
                console.log("User Registration succesful");
                return done(null, newUser);
              });
            }
          });
        };
        // Delay the execution of findOrCreateUser and execute the method
        // in the next tick of the event loop
        process.nextTick(findOrCreateUser);
      }
    )
  );

  // Generates hash using bCrypt
  var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };
};
