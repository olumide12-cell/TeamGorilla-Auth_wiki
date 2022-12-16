const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/database/db");

// Initialize Express
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const docRoutes = require("./src/routes/docRoutes");
const commentRoutes = require("./src/routes/commentRoutes");


// connect to database
connectDB();


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

//routes
app.use('/api/user', userRoutes);
app.use('/api/docs', docRoutes);
app.use('/api/comment', commentRoutes);


//PORT
const PORT = process.env.PORT || 8000;


// Listen to our routes
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});