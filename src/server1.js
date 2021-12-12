var express=require("express");
var bodyParser=require("body-parser");
var path=require("path")
var cors=require('cors')
const mongoose = require('mongoose');
//LandingPage = require("./landing_page")
mongoose.connect('mongodb://localhost:27017/Customer_Responses');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express()
app.use(cors())

options = {
    root: path.join(__dirname)
};
app.use(bodyParser.json());
//app.use(express.static('src'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.get('/landing_page.html',function(req,res){
    res.sendFile("landing_page.html",options)
})
app.post('/Complaint', function(req,res){
	var Fname = req.body.FirstName;
    var Lname = req.body.LastName;
	var tp1 =req.body.type1;
	var tp2 = req.body.type2;
	var tp3 =req.body.type3;
    var tp4 = req.body.type4;
    var tp5 = req.body.otherType;
    var City = req.body.city;
    var State = req.body.state;
    var zip = req.body.pin;
    var phone_no = req.body.phno;

	var data = {
		"First_Name":Fname,
        "Last_Name":Lname,
        "Type_1": tp1,
        "Type_2": tp2,
        "Type_3": tp3,
        "Type_4": tp4,
        "Type_5": tp5,
        "City": City,
        "State":State,
        "Pincode":zip,
        "Phone_Number":phone_no
	}
db.collection('Complaints').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('./landing_page.html');
})
app.get('/contact_details.html',function(req,res){
    res.sendFile("contact_details.html",options)
})
app.post('/contactus', function(req,res){
	var name = req.body.name;
    var phno = req.body.phno;
	var email =req.body.email;
	var message = req.body.message;


	var data = {
		"Name":name,
        "Phone Number":phno,
        "e-mail":email,
        "Message":message
	}
db.collection('Contact_Us_Details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('./contact_details.html');
})
app.get('/contact_details.html',function(req,res){
    res.sendFile("contact_details.html",options)
})

app.listen(3000,()=>{
    console.log("BE started at port 3000")
})
