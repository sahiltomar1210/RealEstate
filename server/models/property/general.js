const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalSchema = new Schema({
    name: String,
    mobile: Number,
    postedby: String,
    saletype: String,
    featuredpackage: String,
    ppdpackage: String,
    ppdid: {type: Schema.Types.ObjectId, ref: "LocationInfo"},
    user: {type: Schema.Types.ObjectId, ref: "User"}
});


const GeneralInfo = mongoose.model("GeneralInfo", generalSchema);

module.exports = GeneralInfo;