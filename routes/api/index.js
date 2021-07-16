const router = require('express').Router();
const workoutRoutes = require("./workoutRoutes");

router.use('/workout', workoutRoutes);

module.exports = router;
