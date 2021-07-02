
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session)
var store = new MongoDBStore({
  uri : "mongodb://localhost/greenthumb",
  collection:'sessions'
})
const PORT = process.env.PORT || 3001;
store.on('error', function(error){
  console.log(error)
})
// Define middleware here
app.use(require('express-session')({
  secret:"Secret express",
  // cookie:{
  //   maxAge:1000 * 60 * 60 * 24 * 7
  // },
  store:store,
  resave: true,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//define api router
app.use(routes);
//connect to the mongo db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/greenthumb";
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

app.get('/',function(req,res){
  res.send("Welcome!"+JSON.stringify(req.session))
})
// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
