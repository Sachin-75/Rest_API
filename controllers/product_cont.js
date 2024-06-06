const Product = require("../model/product_model");

const getProductCont = async(req, res) =>{
    const {company, name, feature, sort, select} = req.query;
    const comQuery = {};
    if(company){
        comQuery.company = company;
        console.log(comQuery);
    }
    if(feature){
        comQuery.feature = feature;
    }
    if(name){
        comQuery.name = {$regex: name, $options: "i"};
        console.log(comQuery);
    }
    let resultApi = Product.find(comQuery);

    if(sort){
        let sortIssueFix = sort.split(",").join(" ");
        resultApi = resultApi.sort(sortIssueFix);
    }

    if(select){
        let selectIssueFix = select.split(",").join(" ");
        resultApi = resultApi.select(selectIssueFix);
    }

    const apiData = await resultApi;
    res.status(201).json({ apiData })
}

const getProductContCheck = async(req, res) =>{
    const apiData = await Product.find(req.query).select("name");
    console.log(req.query);
    res.status(201).json({ apiData })
}

module.exports = {getProductCont,getProductContCheck};
