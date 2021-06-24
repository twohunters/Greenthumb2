const router = require("express").Router();
const plantRoutes = require("./plants");
const gardenRoutes = require('./gardens');
const userRoutes = require("./user")

// plant routes
router.use("/plants", plantRoutes);
//garden routes
router.use('/gardens', gardenRoutes);
//user routes
router.use('/user', userRoutes)

module.exports = router;
