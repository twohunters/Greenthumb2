const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create)
  .get(userController.findOne);

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
router.route("/login")
.post(userController.findOne)
module.exports = router;
