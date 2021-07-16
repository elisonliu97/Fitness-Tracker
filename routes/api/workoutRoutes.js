const router = require("express").Router();
const WorkoutDB = require("../../models/workout")

// ROUTE TO CREATE NEW WORKOUT
router.post('/', async (req, res) =>{
    try{
        // create entry in db
        const workoutData = await WorkoutDB.create({
            ... req.body
        });
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;
