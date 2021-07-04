const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require("../controllers/auth.js")

router.post('/signup', User.signup);

router.post('/signin', passport.authenticate('local'), User.signin);

module.exports = router;
