const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const models = require("./models");
const session = require('express-session');
const passport = require('passport');

var apiRouter = require('./routes/api');


const app = express();
const PORT = 8000;

app.use(cors({origin: `http://localhost:${PORT}`}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use('/api', apiRouter);

app.get('/', (req, res) => res.send(' 123 Express Server'));
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});





