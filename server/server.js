const express = require('express');
const session = require("express-session");
const db = require('./config/connections');

const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(session({
  secret: "12345",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: true,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
