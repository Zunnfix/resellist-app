require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 20 // * 24
  }
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Database Connected');
})

// Endpoints


app.get('/api/user', function(req, res) {
  if(req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(404).json({
      error: "USER_NOT_FOUND"
    })
  }
})

app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`));