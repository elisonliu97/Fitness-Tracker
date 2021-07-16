const router = require("express").Router();
const WorkoutDB = require("../../models/workout")
const db = require("../../models")

// ROUTE TO GET WORKOUT DATA
router.get('/', async (req, res) => {
    try {
        const workoutData = await WorkoutDB.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration'
                    }
                }
            }
        ])
        res.status(200).json(workoutData)
    } catch (err) {
        res.status(400).json(err)
    }
})


// ROUTE TO get WORKOUT DATA IN RANGE
router.get('/range', async (req, res) => {
    try {
        const workoutData = await WorkoutDB.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration'
                    }
                }
            }
        ]).sort({ _id : -1}).limit(7)
        workoutData.reverse()
        res.status(200).json(workoutData)
    } catch (err) {
        res.status(400).json(err)
    }
})


// ROUTE TO CREATE NEW WORKOUT
router.post('/', async ({ body }, res) => {
    try {
        // create entry in db
        const workoutData = await WorkoutDB.create({});
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// ROUTE TO UPDATE WORKOUT
router.put("/:id", async ({ params, body }, res) => {
    try {
        const workoutData = await WorkoutDB.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true }
        )
        res.status(200).json(workoutData);
    }
    catch (err) {
        res.json(err);
    };
})



module.exports = router;
