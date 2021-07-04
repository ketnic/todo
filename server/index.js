const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const models = require("./models");
const session = require('express-session');
const passport = require('passport');
var cookieParser = require('cookie-parser');

var authRouter = require('./routes/auth');

const app = express();
const PORT = 8000;

models.sequelize.sync()

app.use(cors({origin: `http://localhost:${PORT}`}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const sessionMiddleware = session({
  secret: 'secret',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000,
    httpOnly: false,
  },
});

app.use(cookieParser());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.get('/', (req, res) => res.send(' 123 Express Server'));
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});





