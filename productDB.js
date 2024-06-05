require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product_model");
const productJson = require("./products.json");

const init = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(productJson);
        console.log("added successfully");
    } catch (error) {
        console.log(error);
    }
}

init();