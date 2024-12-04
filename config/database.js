const mongoose = require('mongoose');
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(
        process.env.DATABASE_URL, 
    )
    .then(() => {
        console.log("DB connection is successful");
    })
    .catch((error) => {
        console.log("Issue in DB connection:", error.message);
        process.exit(1); 
    });
};

module.exports = dbconnect;
