const express=require("express");
const app=express();
const mongoose =require("mongoose");
const path=require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


//geting connection with mongodb
main().then(()=>{
    console.log("connection is successfull");
})
.catch(err => console.log(err) );


async function main(){  
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

app.get('/',(re,res)=>{
    res.send("Root is working");
})


//for server starting
app.listen(8080,()=>{
    console.log(`App is Listening  on port ${8080} `)
})