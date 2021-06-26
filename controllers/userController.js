const db = require("../models");
module.exports = {
create: function(req,res){
    db.User
    .create(req.body)
    .then(dbModel=>res.json(dbModel))
    .catch(err=>console.log(err))
},
findById: function(req,res){
    db.User
    .findById(req.params.id)
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
findAll: function(req,res){
    db.User
    .find(req.query)
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
update: function(req,res){
    db.User
    .findOneAndUpdate({_id:req.params.id})
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
remove: function(req,res){
    db.Users
    .findById({_id:req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
}