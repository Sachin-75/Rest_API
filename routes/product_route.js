const express = require("express");
const router = express.Router();
const {getProductCont,getProductContCheck} = require("../controllers/product_cont")

router.route("/").get(getProductCont);
router.route("/checking").get(getProductContCheck);

module.exports = router;