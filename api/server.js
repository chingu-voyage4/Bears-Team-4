const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const config = require("./utils/config");
const app = express();
const mongoose = require("mongoose");
const initPassport = require("./passport/init");
// const routes = require("./routes/index")(passport);
const routes = require("./routes/index");

// // Connect to DB-Local:
// NOTE: Uncomment below line if you want to save data locally
mongoose
  .connect(config.db.atlas)
  .then(db => console.log("Database Successfully Connected"))
  .catch(err => console.log("Database Connection Failed\n", err));

// Connect to DB-Cloud
// NOTE: Uncomment below line if you want to save data in the cloud(Mlab)
//mongoose.connect(config.db.mlab);

// Setting up view engine. If decided to use view engine add views to "view" folder.
app.set("view engine", "ejs");

// Setting up CORS
const corsOptions = {
  origin: ["*", "http://localhost:3000", "https://chingu-coupons.herokuapp.com"], // List of host authorized make cors request. For cross origin cookies specific host should be given. (ex:"http://localhost:3000")
  credentials: true // Must enable for cross origin cookies.
};
app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../", "build"))); // Serving build version of react app
app.use(
  session({
    secret: config.sessionSecret,
    resave: false, // forces sesseion to be saved even when there was no change
    saveUninitialized: false // forces uninitialized sessions to be saved
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

// for using routes
app.use("/api", routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

module.exports = app;
