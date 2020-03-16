var express = require('express');
var router = express.Router();

router.post('/makeBooking', function (req, res) {
	var user_id = req.body.user_id;
	var booking_on = new Date();
	var booking_by = req.body.booking_by;
	var booking_by_admin_id = req.body.booking_by_admin_id;
	if(typeof booking_by_admin_id == 'undefined' || booking_by_admin_id == "")
	{
		booking_by_admin_id = 0;
	}
	var booking_from = req.body.booking_from;
	
	var booking_to = req.body.booking_to;
	var booking_rate = req.body.booking_rate;
	var booking_amount = req.body.booking_amount;
	
	var sql ="INSERT into booking (user_id, booking_on, booking_by,booking_by_admin_id,booking_from,booking_to,booking_rate,booking_amount) VALUES "+
	"("+user_id+", NOW(),'"+booking_by+"',"+booking_by_admin_id+",'"+booking_from+"','"+booking_to+"',"+booking_rate+","+booking_amount+"); "
	console.log(sql);
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});
	res.send('Booking Inserted successfully');
			
})

router.post('/fetchBookingByUser', function (req, res) {
	var user_id = req.body.user_id;
	
	var sql = "select * from booking where user_id = "+user_id;
	
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send({error : 0,"message" : "credential match","data" : result});
	});
	
});

router.post('/fetchBookingAll', function (req, res) {
	var sql = "select * from booking";
	
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send({error : 0,"message" : "credential match","data" : result});
	});
	
});

router.post('/fetchBookingByFilter', function (req, res) {
	var user_id = req.body.user_id;
	
});
module.exports = router;