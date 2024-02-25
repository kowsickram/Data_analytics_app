const express = require('express');
const router = express.Router();
//Signuin
const userauth = require('../controllers/userauth');
router.post('/signin', userauth.signin);

//Signup
const newauth = require("../controllers/newauth")
router.post('/signup', newauth.signup);

module.exports = router;