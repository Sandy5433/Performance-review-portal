// const express = require('express');

const session = require("express-session");
const db = require('./config/connections');
const express = require('express')
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

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
