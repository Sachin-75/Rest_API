const Product = require("../model/product_model");

const getProductCont = async(req, res) =>{
    const apiData = await Product.find({name:"iphone"});
    res.status(201).json({ apiData })
}

const getProductContCheck = async(req, res) =>{
    const apiData = await Product.find(req.query);
    console.log(req.query);
    res.status(201).json({ apiData })
}

module.exports = {getProductCont,getProductContCheck};