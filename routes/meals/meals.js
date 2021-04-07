var express = require('express');
var router = express.Router();
var mealController = require('./mealController');
console.clear()

router.post('/add-meal', mealController.addMeal);

router.get('/view-meals/:id', mealController.viewMeals)

router.put('/edit-meal', mealController.editMeal)

router.delete('/delete-meals/:id', mealController.deleteMeal)

// router.post('/add-food', mealController.addFood);

// router.put('/edit-food', mealController.editFood);

// router.delete('/delete-food/', mealController.deleteFood);


module.exports = router;
