/* var mysql = require('mysql');
var express = require('express')
var app = express()


var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


/*
var sess = req.session;  //initialize session variable
req.session.userId = results[0].id; //set user id
req.session.user = results[0];//set user name


*/
/* 
 req.session.destroy(function(err) {
      //cal back method
   })

var con = mysql.createConnection({
    user: "root",
    password: "Password@123",
    database: "hotel_db",
    host: "127.0.0.1",
    dialect: "mysql"
});

/*

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SHOW DATABASES;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });

  
});

app.get('/loginCustomer', function (req, res) {
  res.send('hello world')
})

app.listen(3000)


 */ 
///////////////////////////////////////////////////////////


var express = require('express')
  , user = require('./routes/user')
  , room = require('./routes/room')
  , booking = require('./routes/booking')
  , http = require('http')
  , path = require('path');
//var methodOverride = require('method-override');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'Password@123',
              database : 'hotel_db'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/user", user);
app.use("/booking", booking);
 
//Middleware
app.listen(8080)
