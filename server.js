const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


// const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// NEW 
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}


mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Expose-Headers', 'Set-Cookie');
  //res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

// Routes
app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
