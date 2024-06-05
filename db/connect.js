const mongoose = require("mongoose");
// const URI = "mongodb://localhost:27017/build_api";
// const URI = process.env.MONGODB_URI;
// mongoose.connect();
const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to DB");
    } catch (error) {
        console.error("database  connection failed");
        // process.exit(0);
    }
};

module.exports = connectDB;