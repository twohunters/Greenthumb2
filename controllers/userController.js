const db = require("../models");
module.exports = {
create: function(req,res){
    db.Users
    .create(req.body)
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
findById: function(req,res){
    db.Users
    .findById(req.params.id)
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
findAll: function(req,res){
    db.Users
    .findAll(req.query)
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
update: function(req,res){
    db.Users
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