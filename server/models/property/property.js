const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    length: Number,
    breath: Number,
    totalarea: Number,
    areaunit: String,
    bhk: {type: Number, enum: [1,2,3,4]},
    floors:Number,
    attached: String,
    westerntoilet:{type: String, enum: ["Yes","No"]},
    furnished:{type: String, enum: ["Furnished","Fully-Furnished","Semi-Furnished"]},
    carparking:{type: String, enum: ["Yes","No"]},
    lift:{type: String, enum: ["Yes","No"]},
    electricity:String,
    facing:String,
    ppdid: {type: Schema.Types.ObjectId, ref: "PpdId"},
    user: {type: Schema.Types.ObjectId, ref: "User"}

});


const PropertyDetail = mongoose.model("PropertyDetail", propertySchema);

module.exports = PropertyDetail;