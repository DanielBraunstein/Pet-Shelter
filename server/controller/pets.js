var mongoose = require("mongoose");
var Pet = mongoose.model("Pet");

module.exports = {
    viewAllPets: function (req, res) {
        Pet.find({}, function (error, data) {
            if (error) {
                console.log(error)
                res.json({message : "error", error : error});
            }
            else{
                res.json({message : "success", Pets : data});
            }
        })
    },
    createPet: function (req, res) {
        Pet.create(req.body, function(error, data){
            if (error) {
                console.log(error)
                res.json({message : "error", error:error});
            }
            else if(data) {
                res.json({message : "success", data : data});
            }
        })
    },
    // // createReview: function (req, res) {
    // //     Review.create(req.body, function(error, data){
    // //         if (error) {
    // //             console.log(error)
    // //             res.json({message : "error", error:error});
    // //         }
    // //         else if(data) {
    // //             res.json({message : "success", data : data});
    // //         }
    // //     })
    // // },
    viewOnePet: function (req, res) {
        console.log("view one pet")
        Pet.find({_id: req.params.id}, function (error, data) {
            if (error) {
                console.log(error)
                res.json({message : "error", error:error});
            }
            else if(data){
                res.json({message : "success", data : data});
            }
        })
    },


    update: function (req, res) {
        console.log(req)
        Pet.update({_id: req.params.id}, req.body, function (error, data) {
            if (error) {
                console.log(error)
                res.json({message : "error", error:error});
            }
            else if(data){
                res.json({message : "success", data : data});
            }
        })
    },
    like: function(req, res){
        console.log("pets.js")
        console.log(req.body)
        Pet.update({_id: req.params.id}, {$set: {likes: req.body.likes}},
        {runValidators: true, new:true})
        .then(
            data => res.json({message:"success", review: data})
        )
        .catch(
            error => res.json({message: "error", error: error})
        )
    },
    deletePet: function (req, res) {
        console.log("deleting @ pets.js")
        Pet.findOneAndRemove({_id: req.params.id})
        .then(
            data => res.json({message: "success"})
        )
        .catch(
            err=>res.json({message: "Error", error:err})
        )
    }
}
