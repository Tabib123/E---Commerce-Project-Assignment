const express =require('express');
const app= new express();
const mongoose =require('mongoose');


let URL="mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/MernEcommerce?retryWrites=true&w=majority";
let option={user:'testuser7777',pass:"testuser7777",autoIndex:true};
mongoose.connect(URL,option).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})


module.exports=app;