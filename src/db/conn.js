const mongoose = require("mongoose");

//connectin creation and certain a new db
mongoose.connect("mongodb://localhost:27017/Students-api",{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false})
.then( () => console.log("connection succesfull..."))
.catch((err)=>console.log("No Connection"));