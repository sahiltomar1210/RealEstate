const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ppdSchema = new Schema({
    _id:String,
});


const PpdId = mongoose.model("PpdId", ppdSchema);

module.exports = PpdId;