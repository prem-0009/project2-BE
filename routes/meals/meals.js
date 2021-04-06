var express = require('express');
var router = express.Router();
var mealController = require('./mealController');
console.clear()



router.post('/add-meals', mealController.addMeals);

router.get('/view-meals/:id', mealController.viewMeals)

router.delete('/delete-meals/:id', mealController.deleteByID)

// router.post('/login', userController.login);

module.exports = router;
