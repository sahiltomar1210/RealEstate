const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const userRoutes = require("./routes/user");
app.use(express.json());
app.use(bodyparser());


//Router MIddlewares
app.use("/property", (req, res, next) =>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split("random ")[1];

        // invalid token
        jwt.verify(token, secret, function(err, decoded) {
            if(err) {
                return res.status(400).json({ status: "Failed", message : err.message});
            }
            req.user= decoded.data;
            next();
        });   
    }else {
        return res.status(403).json({ status: "Failed", 
        message : "Not authenticated user"});
    }

});
app.use("/users", userRoutes);
app.get("*", (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    })
})
module.exports = app;