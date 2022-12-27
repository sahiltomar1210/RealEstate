const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const basicSchema = new Schema({
    property: String,
    negotable: String,
    description: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}

}, {timestamps: true});


const BasicInfo = mongoose.model("BasicInfo", basicSchema);

module.exports = BasicInfo;