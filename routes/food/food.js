var express = require('express');
var router = express.Router();
var foodController = require('./foodController');
console.clear()

router.post('/add-food', foodController.addFood);

router.put('/edit-food', foodController.editFood);

router.delete('/delete-food', foodController.deleteFood);

module.exports = router;
