var express = require('express');
var router = express.Router();

// About page route.
router.post('/loginUser', function (req, res) {
	var emailId = req.body.emailId;
	var socialId = req.body.socialId;
	var password = req.body.password;
	var type     = req.body.type;
	if(type == "social")
	{
		var checkSql = "SELECT * from users where social_id ='"+socialId+"'";
	}
	else{
		var checkSql = "SELECT * from users where email_id ='"+emailId+"' AND password = '"+password+"'";
	}
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send({error : 0,"message" : "credential match","data" : result});
		}
		else
		{
			res.send({error : 1,"message" : "credential did not match"});
		}
	});
})

router.post('/registerUser', function (req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var mobNo = req.body.mobNo;
	var emailId = req.body.emailId;
	var socialId = req.body.socialId;
	var password = req.body.password;
	var type     = req.body.type;
	
	if(type == "social")
	{
		var checkSql = "SELECT * from users where social_id ='"+socialId+"'";
	}
	else{
		var checkSql = "SELECT * from users where email_id ='"+emailId+"'";
	}
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send('User already exist,Please login');
		}
		else
		{
			var sql ="INSERT into users (first_name, last_name, mob_no,email_id,social_id,password) VALUES ('"+firstName+"','"+lastName+"','"+mobNo+"','"+emailId+"','"+socialId+"','"+password+"'); "
			global.db.query(sql, function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
			});
			res.send('User Inserted successfully');
		}
	});
	
})

router.post('/registerAdmin', function (req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var mobNo = req.body.mobNo;
	var emailId = req.body.emailId;
	var password = req.body.password;
	
	var checkSql = "SELECT * from admin where email_id ='"+emailId+"'";
	
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send('User already exist');
		}
		else
		{
			var sql ="INSERT into admin (first_name, last_name, mob_no,email_id,password) VALUES ('"+firstName+"','"+lastName+"','"+mobNo+"','"+emailId+"','"+password+"'); "
			global.db.query(sql, function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
			});
			res.send('Admin Inserted successfully');
		}
	});
})



// About page route.
router.post('/loginAdmin', function (req, res) {
	var emailId = req.body.emailId;
	var password = req.body.password;
	
	var checkSql = "SELECT * from admin where email_id ='"+emailId+"' AND password = '"+password+"'";
	global.db.query(checkSql, function (err, result) {
		if (err) throw err;
		console.log(result);
		if(result.length>0)
		{
			res.send({error : 0,"message" : "credential match","data" : result});
		}
		else
		{
			res.send({error : 1,"message" : "credential did not match"});
		}
	});
})

module.exports = router;