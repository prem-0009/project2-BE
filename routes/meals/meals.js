var express = require('express');
var router = express.Router();
var mealController = require('./mealController');


router.post('/add-meal', mealController.addMeal);

router.get('/view-meals/:id', mealController.viewMeals)

router.put('/edit-meal', mealController.editMeal)

router.post('/add-food', mealController.addFood)

router.delete('/delete-meal', mealController.deleteMeal)
// router.delete('/delete-meal/:id', mealController.deleteMeal)


module.exports = router;
