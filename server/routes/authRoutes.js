const express = require('express');
const router = express.Router();
const userauth = require('../controllers/usercont');

//Signin
router.post('/signin', userauth.signin);

//Signup
router.post('/signup', userauth.signup);

//Active User
router.get('/activeuser', userauth.activeuser)

// User Data
router.get('/userdata', userauth.userdata)

// Upadte Data
router.get('/update', userauth.userdata)

module.exports = router;