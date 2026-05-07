const express = require("express");

const app = express();

app.use(express.json());


// Database Connection
require("./db");


// Routes
const studentRoutes = require("./studentRoutes");

app.use("/", studentRoutes);


// Server
app.listen(3000, () => {

    console.log("Server running on port 3000");
});


// npm init -y
// npm install express mongoose
// node server.js
// mongosh
// show dbs
// use collegeDB
// show collections
// db.students.find()
// GET http://localhost:3000/students