const express=require("express")
const app=express()
const cors = require("cors");
require("dotenv").config()

const db=require("./dataBase/dataBase")

const userRoute=require("./routes/auth")
const adminRoute=require("./routes/admin")
const orderRoute=require("./routes/order")
const paymentRoute=require("./routes/payment")

db()



app.use(cors({
    origin: "https://e-commerce-5-kdu1.onrender.com",
    credentials: true
  }));
app.use(express.json());


app.use("/api/auth", userRoute);
app.use("/api/admin",adminRoute);
app.use("/api/order",orderRoute)
app.use("/api/payment",paymentRoute)



app.listen(process.env.PORT,()=>{
    console.log("server connection succesfull");
    
})

