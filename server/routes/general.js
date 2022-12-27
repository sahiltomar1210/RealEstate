const express = require("express");
const GeneralInfo = require("../models/property/General");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser());

router.get("/", async (req, res) => {
    try{
        console.log(req.ppdid);
        const {pagesize = 1} = req.query;
        const posts = await GeneralInfo.find({ppdid: req.ppdid}).skip((Number(pagesize)-1)* 10).limit(10);
        res.json({
            status: "Success",
            posts
        })

    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.post("/", async (req, res) => {
    try{
        const posts = await GeneralInfo.create({
            name: req.body.name,
            mobile: req.body.mobile,
            postedby: req.body.postedby,
            saletype: req.body.saletype,
            featuredpackage: req.body.featuredpackage,
            ppdpackage: req.body.ppdpackage,
            ppdid:req.ppdid
        });
        res.json({
            status: "Success",
            posts
        })

    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});
module.exports = router;