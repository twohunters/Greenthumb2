const router = require("express").Router();
// STILL NEED TO MAKE CONTROLLER ----REMEBER TO CHANGE PATH------
const plantsController = require("../../controllers/plantsController");


// Matches with "/api/plants"
router.route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);

module.exports = router;