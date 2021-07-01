const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").post(userController.findOne)
//   .get(userController.findOne);
  
  module.exports = router;

