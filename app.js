require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const route = require("./routes/product_route");
const connectDb = require("./db/connect")

app.use("/api/product",route);


app.get("/",(req,res)=>{
    res.status(201).send("I am on home page");
})

const listening = async() => {
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Server running at ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

listening();    

