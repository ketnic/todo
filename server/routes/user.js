const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require("../controllers/auth.js")
const Calendar = require("../controllers/calendar.js")

router.get('/username/mycalendars', User.getMyCalendars);
router.get('/username/calendars', User.getAllCalendars);

