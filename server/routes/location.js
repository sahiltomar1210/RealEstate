const express = require("express");
const LocationInfo = require("../models/property/Location");
const PpdId = require("../models/ppd/PpdId");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser());

router.get("/", async (req, res) => {
    try{
        console.log(req.ppdid);
        const {pagesize = 1} = req.query;
        const posts = await LocationInfo.find({ppdid: req.ppdid}).skip((Number(pagesize)-1)* 10).limit(10);
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
        const count = await PpdId.count();
        function ppdidcreation(DataCount){
            let count=String(DataCount)
            let PPD=""
           if(count.length==1){
             PPD="PPD"+"111" +count
             return PPD
          
         } else if(count.length==2){
            PPD= "PPD"+"11" +count
            return PPD
         }else if(count.length==3){
              PPD= "PPD"+"1" +count
              return PPD
         }else {
             PPD= "PPD" +count
             return PPD
         }
          }
          

          const ppdid = ppdidcreation(count)

          const post = await PpdId.create({_id:ppdid});

        const posts = await LocationInfo.create({
            email: req.body.email,
            city: req.body.city,
            area: req.body.area,
            pincode: req.body.pincode,
            address: req.body.address,
            landmark:req.body.landmark,
            latitude:req.body.latitude,
            longitude:req.body.longitude,
            ppdid:req.ppdid,
            user: req.user
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