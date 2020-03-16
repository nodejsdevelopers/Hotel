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
	
	var sql = "select * from booking where user_id = "+user_id+" order by booking_from desc  limit 1000";
	
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send({error : 0,"message" : "credential match","data" : result});
	});
	
});

router.post('/fetchBookingAll', function (req, res) {
	var sql = "select * from booking order by id desc  limit 1000";
	
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send({error : 0,"message" : "credential match","data" : result});
	});
	
});

router.post('/fetchBookingByFilter', function (req, res) {
	var fromDate = req.body.fromDate;
	var toDate = req.body.toDate;
	var byAdmin = req.body.byAdmin;
	var byUser = req.body.byUser;
	var byWhichAdmin = req.body.byWhichAdmin;
	var searchType = req.body.searchType;
	
	var sql = "select * from booking ";
	if(searchType == 'byAllAdmin')
	{
		sql+=" WHERE booking_by = 'ADMIN' ";
		if(fromDate != "" && typeof fromDate != 'undefined')
		{
			sql+=" AND booking_from = '"+fromDate+"' ";
		}
		if(toDate != "" && typeof toDate != 'undefined')
		{
			sql+=" AND booking_to = '"+toDate+"' ";
		}
	}
	if(searchType == 'byAdmin')
	{
		sql+=" WHERE booking_by = 'ADMIN' AND booking_by_admin_id ="+byWhichAdmin;
		
		if(fromDate != "" && typeof fromDate != 'undefined')
		{
			sql+=" AND booking_from = '"+fromDate+"' ";
		}
		if(toDate != "" && typeof toDate != 'undefined')
		{
			sql+=" AND booking_to = '"+toDate+"' ";
		}
	}
	if(searchType == 'onData')
	{
		sql+=" WHERE booking_from = '"+fromDate+"' ";
	}
	if(searchType == 'fromToDate')
	{
		sql+=" WHERE booking_from = '"+fromDate+"' AND booking_to = '"+toDate+"'";
	}
	sql+= "  order by id desc  limit 1000";
	
	console.log(sql);
	global.db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send({error : 0,"message" : "credential match","data" : result});
	});
	
});
module.exports = router;
