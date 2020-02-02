const Burger = require('../models/burger.js');

module.exports = function(app){

    app.get("/", function(req, res) {
        Burger.findAll({}).then(function(results) {
          res.render("index",{burger:results});
        });
      });
    //Get all burger names
    app.get("/api/burgerName",(req,res)=>{
        Burger.findAll({}).then((results)=> res.json(results));
    });
        // Add a new burger
    // app.post("/api/newBurger",(req,res)=> {
    //     Burger.create({
    //         burger_name: req.body.burger_name
    //     }).then((results)=> res.json(results));
    // });
}