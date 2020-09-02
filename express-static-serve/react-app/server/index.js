const uri = process.env.MONGODB_URI;
const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
// const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express(); // create express app
const { User } = require('./models/user');
const jsonParser = require('body-parser').json;
const logger = require('morgan');


mongoose.connect(uri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', err => console.error("connection error:", err));
db.once("open", () => console.log('db connection successful'));

// add middlewares

app.use(logger('dev'));
app.use(jsonParser());
app.use(express.urlencoded({ extended: true }))
// app.use(session({
//   secret: 'Flash Cards App',
//   resave: true,
//   saveUninitialized: true
// }));
app.use(cookieParser('flash cards secret'));
// app.use((req, res, next)=>{
//   res.locals.currentUser = req.session.userId;
//   next();
// });
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


app.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    User.authenticate(email, password, function(error, user) {
      if (error || !user) {
        const err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        // req.session.userId = user._id;
        res.cookie('userId', user._id, { signed: true, httpOnly: false, expire: 360000 + Date.now() });
        return res.redirect('/profile');
      }
    });
  } else {
    const err = new Error('Email and password are required');
    err.status = 401;
    return next(err);
  }
});

// app.get('/logout', (req, res, next) => {
//   if (req.signedCookies.userId) {
//     res.clearCookie('userId');
//     return res.redirect('/');
//   } else {
//     const err = new Error('Must be logged in to log out');
//     err.status = 401;
//     err.message = 'Must be logged in to log out';
//     return res.json(err);
//   }
// });

app.post('/register', (req, res, next) => {
  const { name, username, email, password, password_confirmation} = req.body;
  
  if (name && username && email && password && password_confirmation) {
    if (password !== password_confirmation) {
      const err = new Error('Passwords must match.');
      err.status = 400;
      return next(err);
    } else {
      const userData = {
        name: name,
        email: email,
        username: username,
        password: password
      }
      User.create(userData, (err, user) => {
        if (err) {
          return next(err);
        } else {
          res.cookie('userId', user._id, { signed: true, httpOnly: false, expire: 360000 + Date.now() });
          return res.redirect('/');
        }
      })
    }
  } else {
    const err = new Error('All fields required.');
    err.status(400);
    return next(err);
  }
});

app.get('/profile', (req, res, next) => {
  if (!req.signedCookies.userId) {
    const err = new Error("You must be logged in to view your profile.");
    // Forbidden status
    err.status = 403;
    return next(err);
  } else {
    User.findById(req.signedCookies.userId)
      .exec(function(error, user) {
        if (error) {
          return next(error)
        } else {
          res.cookie('username', user.username, { signed: false, httpOnly: false, expire: 360000 + Date.now() });
          res.cookie('name', user.name, { signed: false, httpOnly: false, expire: 360000 + Date.now() });
          res.cookie('email', user.email, { signed: false, httpOnly: false, expire: 360000 + Date.now() });
          res.cookie('userId', user._id, { signed: true, httpOnly: false, expire: 360000 + Date.now() });
          return next();
        }
      })
  }
})



app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});