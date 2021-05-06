var express = require('express');
var router = express.Router();
var mealController = require('./mealController');


router.post('/add-meal', mealController.addMeal);

router.get('/show-all-meals/:id', mealController.showAllMeals)

router.put('/edit-meal', mealController.editMeal)

router.post('/add-food', mealController.addFood)

router.delete('/delete-meal', mealController.deleteMeal)
// router.delete('/delete-meal/:id', mealController.deleteMeal)


module.exports = router;
