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
        //Add a new burger
    app.post("/api/newBurger",(req,res)=> {
        Burger.create({
            burger_name: req.body.burger_name
        }).then((results)=>{
          res.json({id: results.id});
            res.status(200).end()
        } );
    });

      //Post Change status of burger
      app.put("/api/newBurger/:id", (req,res)=>{
        
        Burger.findOne({
          where:{
            id: req.params.id
          }
        }).then(function(result){
          result.update({
            devoured: req.body.devoured
          });   
          res.status(200).end();
        });
      });


    app.delete("/api/newBurger/:id", function(req, res) {
        console.log("Burger ID:");
        console.log(req.params.id);
        Burger.destroy({
          where: {
            id: req.params.id
          }
        }).then(function() {
         
          res.end();
        });
      });
    };


