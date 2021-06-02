const express = require("express");
require("./db/conn");
const  register = require("./models/stud");
const app = express();
const port = process.env.port || 8000;
const studRouter = require("./routers/students")

app.use(express.json());
app.use(studRouter);




app.listen( port ,()=>{
    console.log(`connection is setup at ${port}`);
}) 