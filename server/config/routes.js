var pets = require("../controller/pets.js");
var path = require("path")

module.exports = function (app) {

    // //view1 pet
    app.get('/pet/:id', function(req,res){
        pets.viewOnePet(req,res);
    })
    // //view 1 review
    // app.get('/reviews/:id', function(req,res){
    //     controller.viewOneReview(req,res);
    // })
    //view all rest.
    app.get('/pets', function (req, res) {
        pets.viewAllPets(req, res);
    })
//     //view all rev
//     app.get('/reviews/:id', function (req, res) {
//         controller.viewAllReviews(req, res);
//     })
//     //create rest
    app.post('/pet', function (req, res) {
       pets.createPet(req, res);
    })

    app.patch('/pet/:id', (req, res) => {
        console.log("routes")
        pets.pushReview(req, res);
    })
//     //create rev
//     app.post('/review', function (req, res) {
//         controller.createreview(req, res);
//     })
    //update rest
    app.patch('/update/:id', function (req, res) {
        pets.update(req, res);
    })
    app.patch('/like/:id', function (req, res) {
        pets.like(req, res);
    })
//     //update rev
//     // app.post('/review/:id', function (req, res) {
//     //     controller.update(req, res);
//     // })
//     //delete rest
    app.delete('/pet/:id', (req, res) => {
        pets.deletePet(req, res);
    })
//     //delete rev
//     // app.delete('/review/:id', function(req,res){
//     //     controller.delete(req,res);
//     // })
     app.get('*', (req, res) => {
         res.sendFile(path.resolve('./petShelterApp/dist/index.html'))
     })
}
