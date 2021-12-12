var express=require("express");
var cors=require('cors')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Customer_Responses",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("Connected")
})

var db=mongoose.connection;

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,

// })

// const User = new mongoose.model("BusinessUser",userSchema)


//Routes
app.post("/login.js",(req,res)=>{
    const {email,password} = req.body
    db.collection("Business_accounts").findOne({email:email},(err,user) =>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Succesful",user : user})
            }else{
                res.send({message:"Password did not match"})
            }
        }else{
            res.send({message:"Invalid User"})
        }
    })
})

app.post("/count",(req,res)=>{
    var count1 = req.body
    db.collection("Complaints").countDocuments(function(err,count){
            if (err) throw err;
            count1 = count
            res.send([count1]);
    })
})
app.post("/delete",(req,res)=>{
    var deleteddata = 
    {
    Fname:"",
    Lname:"",
    tp1:null,
    tp2:null,
    tp3:null,
    tp4:null,
    tp5:"",
    City:"",
    State:"",
    zip:"",
    phone_no:""
    }
    db.collection("Complaints").findOneAndDelete({},function(err,info){
            if (info.value==null) 
            {
                res.send({message:"No Complaints present"})
            }
            else
            {
                res.send({
                Fname:info.value.First_Name,
                Lname:info.value.Last_Name,
                tp1:info.value.Type_1,
                tp2:info.value.Type_2,
                tp3:info.value.Type_3,
                tp4:info.value.Type_4,
                tp5:info.value.Type_5,
                City:info.value.City,
                State:info.value.State,
                zip:info.value.Pincode,
                phone_no:info.value.Phone_Number
                })
            }
    })
})

app.listen(9002,()=>{
    console.log("BE started at port 9002")
})



