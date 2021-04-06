var express = require('express');
var router = express.Router();
var mealController = require('./workoutController');
console.clear()



router.post('/add-workout', mealController.addMeals);

// router.get('/view-meals/:id', mealController.viewMeals)

// router.post('/login', userController.login);

module.exports = router;
