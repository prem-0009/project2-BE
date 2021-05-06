var express = require('express');
var router = express.Router();
var workoutController = require('./workoutController');
console.clear()



router.post('/add-workout', workoutController.addWorkout);

router.get('/view-workouts/:id', workoutController.viewWorkouts)

router.delete('/delete-workout/:id', workoutController.deleteByID)

router.put('/patch-workout/:id', workoutController.updateByID)

// router.post('/login', userController.login);

module.exports = router;
