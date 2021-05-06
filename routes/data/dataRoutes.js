var express = require('express');
var router = express.Router();
var dataController = require('./dataController');


router.post('/update-meals', dataController.updateMeals);

router.post('/update-workout', dataController.updateWorkout);

router.get('/show-all-data/:id', dataController.showAllData)

module.exports = router;
