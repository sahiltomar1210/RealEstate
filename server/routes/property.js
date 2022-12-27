const express = require("express");
const PropertyDetail = require("../models/property/Property");
const LocationInfo = require("../models/property/Location");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser());

router.get("/", async (req, res) => {
    try{
        console.log(req.ppdid);
        const {pagesize = 1} = req.query;
        const posts = await PropertyDetail.find({ppdid: req.ppdid}).skip((Number(pagesize)-1)* 10).limit(10);
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
        
        const posts = await PropertyDetail.create({
            length: req.body.length,
            breath: req.body.breath,
            totalarea: req.body.totalarea,
            areaunit: req.body.areaunit,
            bhk: req.body.bhk,
            floors: req.body.floors,
            attached: req.body.attached,
            westerntoilet: req.body.westerntoilet,
            furnished: req.body.furnished,
            carparking: req.body.carparking,
            lift: req.body.lift,
            electricity: req.body.electricity,
            facing: req.body.facing,
            user: req.user,
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