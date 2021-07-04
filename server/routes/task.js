const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require("../controllers/auth.js")
const Calendar = require("../controllers/calendar.js")

router.post('/createcalendar', 123);
router.post('/deletecalendar', 123);
router.post('/editcalendar', 123);
router.post('/calendar', 123);

router.post('/addtask', 123);
router.post('/removetask', 123);

router.post('/adduser', 123);
router.post('/removeuser', 123);