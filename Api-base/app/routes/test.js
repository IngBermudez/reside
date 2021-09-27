
var router = require('express').Router();
var express = require('express');


var axios = require("axios").default;
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const pool = require('../models/pool')

const { response } = require('express');



router.get("/", async function (req, res) {
    return res.json("Ruta test");
});


router.get('/test', async function (req, res) {

    let script = "SELECT * FROM Test";
    let results = await pool.queryClanersProd(script);
    console.log(results);
    res.json(results);
});

module.exports = router;
