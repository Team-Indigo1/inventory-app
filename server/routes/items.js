const express = require("express");
const {Items} = require("../models");
const {check, validationResult} = require('express-validator');


const router = express.Router();

//include middleware for parsing the body included into the request
router.use(express.json());
router.use(express.urlencoded({extended: true}));




//get all items
router.get("/", async (req, res) => {
    const items = await Items.findAll();
    res.json({items});
})

//get a specific item
router.get("/:id", async (req, res) => {
    const item = await Items.findByPk(req.params.id);
    res.json({item});
})


module.exports=router;