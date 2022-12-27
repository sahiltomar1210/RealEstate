const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const basicSchema = new Schema({
    propertytype: {type: String, enum: ["Plot","House","Flat"]},
    negotable: {type: String, enum: ["Yes","No"]},
    price: Number,
    ownership: String,
    propertyage: Number,
    propertyapproved:{type: String, enum: ["Yes","No","Pending"]},
    propertydescription: String,
    bankloan:{type: String, enum: ["Yes","No"]},
    ppdid: {type: Schema.Types.ObjectId, ref: "PpdId"},
    user: {type: Schema.Types.ObjectId, ref: "User"}

});


const BasicInfo = mongoose.model("BasicInfo", basicSchema);

module.exports = BasicInfo;