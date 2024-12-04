
const express=require('express');
const app=express();

require("dotenv").config();

const PORT=process.env.PORT || 3000;


// ye neeche vali line parse krne ke liye hai data ko
app.use(express.json())

const todoRoutes=require('./routes/todos')

//isme local host ke bad api/v1 likh ke aayega basical;ly iska path hai
app.use("/api/v1",todoRoutes)


app.listen( PORT ,()=>{
   console.log("server is runing hai bhaiya")
})
const dbconnect=require('./config/database');
dbconnect();

app.get('/',(req,res)=>{
    res.send('<h1> this is home page bhai log</h1>')
})