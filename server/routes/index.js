const express = require("express");
const router = express.Router();


// we dont need to use this 
// different model routers
router.use('/sauces', require('./sauces'));

module.exports = router;


//testing 