const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findOne);
  module.exports = router;