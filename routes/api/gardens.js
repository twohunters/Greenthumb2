const router = require("express").Router();
const gardensController = require("../../controllers/gardensController");

// Matches with "/api/gardens"
router.route("/")
  .get(gardensController.findAll)
  .post(gardensController.create);

// Matches with "/api/gardens/:id"
router
  .route("/:id")
  .get(gardensController.findById)
  .put(gardensController.update)
  .delete(gardensController.remove);

module.exports = router;
