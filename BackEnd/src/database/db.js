/**
 * 1. Create a connection function for mongoDB
 * 2. Start the cloud mongodb connection
*/

const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI

// Creating connection function
const connectDB = async () => {
    try {
        mongoose.connect(uri);//Nwaoghor Priase Removed await from this function becuase it does nothin to the function anyways
        console.log('Connected to MongoDB');
    } catch (err) {
        // if (err) return err.message;
        console.log(err.message);
    }
};

module.exports = connectDB;