const express = require('express')
const postEmail = require('../controller/emailController')
const router = express.Router();

router.post('/mail',postEmail);

module.exports = router