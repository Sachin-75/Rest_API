const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price must be entered"]
    },
    feature: {
        type: Boolean,
        default: false,
    },
    rates: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "hp", "dell", "Mi"],
            message: `{VALUE} is not supported`
        }
    },
    description: {
        type: String,
        default: "No description available"
    },
    category: {
        type: String,
        enum: ["mobile", "laptop", "watch", "accessory", "tablet", "other"],
        default: "other"
    },
    stock: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Product", productSchema);
