const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: [true, "Price must be entered"]
    },
    feature : {
        type: Boolean,
        default: false,
    }, 
    rates : {
        type: Number,
        default: 4.5
    },
    createdAt : {
        type: Date,
        default: Date.now()
    },
    company : {
        type: String,
        enum: {
            values: ["apple", "samsung", "hp", "dell", "Mi"],
            message: `{VALUE} is not supported`
        }
    }
})

module.exports = mongoose.model("Product", productSchema);