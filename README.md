# Hotel
Hotel Api





database hotel_db

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` bigint(20) NOT NULL,
  `email_id` varchar(100) NOT NULL,
  `social_id` varchar(50),
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;



CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` bigint(20) NOT NULL,
  `email_id` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;



//DATETIME NOT NULL
CREATE TABLE IF NOT EXISTS `booking` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `bookingcom_id` text,
  `booking_on` DATETIME NOT NULL,
  `booking_by` text NOT NULL,
  `booking_by_admin_id` int(10),
  `booking_from` Date NOT NULL,
  `booking_to` Date NOT NULL,
  `booking_rate` int(10) NOT NULL,
  `booking_amount` int(10) NOT NULL,


  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;


///////////////////////////////////////////////////////














api list

create user

method post

http://localhost:8080/user/registerUser

data 
{
"firstName": "First",
"lastName": "Alam",
"mobNo": 8987989870,
"emailId":"abc1@gmail.com",
"socialId" : "socialId",
"password" : "1234567qwe",
"type"     : "normal"
}


Login User
http://localhost:8080/user/loginUser

{
"emailId":"abc1@gmail.com",
"socialId" : "socialId",
"password" : "1234567qwe",
"type"     : "normal"
}




create Admin 

http://localhost:8080/user/registerAdmin

{
"firstName": "First",
"lastName": "Alam",
"mobNo": 8987989870,
"emailId":"abcadmin@gmail.com",
"password" : "1234567qwe"
}


login admin

http://localhost:8080/user/loginAdmin
{
"emailId":"abc@gmail.com",
"password" : "1234567qwe"
}






Add booking

http://localhost:8080/booking/makeBooking


{
"user_id":4,
"booking_by" : "self",
"booking_by_admin_id" : "",
"booking_from" : "2020-03-20",
"booking_to" : "2020-03-22",
"booking_rate" : 2250,
"booking_amount" : 4500
}

Fetch all Booking

http://localhost:8080/booking/fetchBookingAll

{

}


fetch Booking per user

http://localhost:8080/booking/fetchBookingByUser

{
"user_id":6

}



