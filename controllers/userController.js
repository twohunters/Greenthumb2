const db = require("../models");
const bcrypt = require('bcrypt')
module.exports = {
create: function(req,res){
    const pass = bcrypt.hashSync(req.body.password,8)
    db.User
    .create({firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: pass,
        about: req.body.about
    })
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
    db.User
    .findById({_id:req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(500).json(err))
},
findOne: function(req,res){
    console.log(req.body)
    db.User
    .findOne({email:req.body.email})
    .then((dbModel) =>{
        console.log(dbModel)
    })
}
}
//         const pass = dbModel.password
//         bcrypt.compare(req.body.password,pass,function(login,error){
//             if(error){
//                 console.log("Server Error")
//                 res.status(500).send("Server Error")
//             } if(login){
//                 req.session.save(()=>{
//                     res.json({
//                         email: dbModel.email,
//                         id: dbModel._id
//                     })
//                 }
//                 )
//             }else if (!login) {
//                 res.send(alert("User not found"))
//             }
//         })


//     .catch(err=>res.status(500).json(err))
// }
//     )}
// }
