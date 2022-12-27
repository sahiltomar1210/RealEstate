const express = require("express");
const BasicInfo = require("../models/property/Basic");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser());

router.get("/", async (req, res) => {
    try{
        console.log(req.ppdid);
        const {pagesize = 1} = req.query;
        const posts = await BasicInfo.find({ppdid: req.ppdid}).skip((Number(pagesize)-1)* 10).limit(10);
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
        const posts = await BasicInfo.create({
            propertytype: req.body.propertytype,
            negotable: req.body.negotable,
            price: req.body.price,
            ownership: req.body.ownership,
            propertyage: req.body.propertyage,
            propertyapproved: req.body.propertyapproved,
            propertydescription: req.body.propertydescription,
            bankloan: req.body.bankloan,
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