const Product = require("../model/product_model");

const getProductCont = async(req, res) =>{
    const { company, name, feature, sort, select, category, minStock, maxStock, minDiscount, maxDiscount } = req.query;
    const comQuery = {};

    if (company) {
        comQuery.company = { $regex: company, $options: "m" };
        console.log(comQuery);
    }
    
    if (feature) {
        comQuery.feature = { $regex: feature, $options: "t" };;
    }
    
    if (name) {
        comQuery.name = { $regex: name, $options: "i" };
        console.log(comQuery);
    }
    
    if (category) {
        comQuery.category = { $regex: category, $options: "m" };
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
    let limit = Number(req.query.limit) || 5;
    let skip = (page - 1) * limit;
 
    resultApi = resultApi.skip(skip).limit(limit);

    
    const apiData = await resultApi;
    res.status(201).json({ apiData, noContent: apiData.length });
}

const getProductContCheck = async(req, res) =>{
    // const apiData = await Product.find(req.query).select("company");
    const {company,name} = req.query;
    const comQuer = {};
    if(company){
        comQuer.company = company;
    }
    if(name){
        comQuer.name = { $regex: name, $options: "i" };
    }
    const apiData = await Product.find(comQuer);
    const apiInfo = await apiData;
    console.log(req.query);
    res.status(201).json({ apiInfo });
}

module.exports = { getProductCont, getProductContCheck };
