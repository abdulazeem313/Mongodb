const mongoose= require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/cvtdbtest").then(()=>{
    console.log("Connected to the DB")
}).catch((error)=>{
    console.log("error in Connecting",error)
});
module.exports= db;

