var express = require('express');
var db = require('../models/index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	db['order'].findAll({
    attributes: [
	    'id', 
	    'user_id', 
	    'product_id', 
	    'quantity',
	    'condition',
	    'latitude',
	    'longitude',
	    'status', 
	    'created_at'
    ]
}).then(function(orders) {
  		res.json(orders);
  	});
});

router.post('/', function(req, res, next) {
	var datetime = new Date();
	var form = req.body;
	db['order'].create({
		quantity: form.quantity,
		condition: form.condition,
		status: "new",
		latitude: form.latitude,
		longitude: form.longitude,
		user_id: form.user_id,
		product_id: form.product_id,
		created_at: datetime
	}).then(function(){
		res.json(form);
	})
});

module.exports = router;