var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var petSchema=new mongoose.Schema({
    name : {type: String, required: [true, "name required"], minlength: [3, "name must be 3 or more characters long."]},
    type : {type: String, required: [true, "type required"], minlength: [3, "type must be 3 or more characters in length"]},
    description : {type: String, required: [true, "description required"], minlength: [3, "description must be 3 or more characters in length"]},
    skill1 : {type: String, default: ""},
    skill2 : {type: String, default: ""},
    skill3 : {type: String, default: ""},
    likes: {type: Number, default: 0}
})
var Pet = mongoose.model("Pet", petSchema);