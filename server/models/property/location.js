const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    email: String,
    city: String,
    area: Number,
    pincode: Number,
    address: String,
    landmark:String,
    latitude:Number,
    longitude:Number,
    ppdid: {type: Schema.Types.ObjectId, ref: "PpdId"},
    user: {type: Schema.Types.ObjectId, ref: "User"}

});


const LocationInfo = mongoose.model("LocationInfo", locationSchema);

module.exports = LocationInfo;