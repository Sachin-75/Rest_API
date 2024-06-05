const Product = require("../model/product_model");

const getProductCont = async(req, res) =>{
    const {company, name} = req.query;
    const comQuery = {};
    if(company){
        comQuery.company = company;
        console.log(comQuery);
    }
    if(name){
        comQuery.name = name;
        console.log(comQuery);
    }
    const apiData = await Product.find(comQuery);
    res.status(201).json({ apiData })
}

const getProductContCheck = async(req, res) =>{
    const apiData = await Product.find(req.query);
    console.log(req.query);
    res.status(201).json({ apiData })
}

module.exports = {getProductCont,getProductContCheck};