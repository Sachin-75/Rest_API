const mongoose = require("mongoose");

const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to DB");
    } catch (error) {
        console.error("database  connection failed");
    }
};

module.exports = connectDB;