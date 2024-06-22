const Product = require("../model/product_model");

const getProductCont = async(req, res) =>{
    const { company, name, feature, sort, select, category, minStock, maxStock, minDiscount, maxDiscount } = req.query;
    const comQuery = {};

    if (company) {
        comQuery.company = company;
        console.log(comQuery);
    }
    
    if (feature) {
        comQuery.feature = feature;
    }
    
    if (name) {
        comQuery.name = { $regex: name, $options: "i" };
        console.log(comQuery);
    }
    
    if (category) {
        comQuery.category = category;
    }
    
    if (minStock || maxStock) {
        comQuery.stock = {};
        if (minStock) comQuery.stock.$gte = Number(minStock);
        if (maxStock) comQuery.stock.$lte = Number(maxStock);
    }
    
    if (minDiscount || maxDiscount) {
        comQuery.discount = {};
        if (minDiscount) comQuery.discount.$gte = Number(minDiscount);
        if (maxDiscount) comQuery.discount.$lte = Number(maxDiscount);
    }

    let resultApi = Product.find(comQuery);

 
    if (sort) {
        let sortIssueFix = sort.split(",").join(" ");
        resultApi = resultApi.sort(sortIssueFix);
    }

    
    if (select) {
        let selectIssueFix = select.split(",").join(" ");
        resultApi = resultApi.select(selectIssueFix);
    }

  
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;

    resultApi = resultApi.skip(skip).limit(limit);

    
    const apiData = await resultApi;
    res.status(201).json({ apiData });
}

const getProductContCheck = async(req, res) =>{
    const apiData = await Product.find(req.query).select("name");
    console.log(req.query);
    res.status(201).json({ apiData });
}

module.exports = { getProductCont, getProductContCheck };
