server.js 

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











db.js

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));


const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://23123070dj_db_user:OeVYGETCIfDYGfSY@cluster0.ddsuzd8.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));






// 23123070dj_db_user
// OeVYGETCIfDYGfSY











studentModel.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    name: String,
    email: String,
    course: String
},
{
    versionKey: false
});

module.exports = mongoose.model("Student", studentSchema);














studentRoutes.js
const express = require("express");

const router = express.Router();

const Student = require("./studentModel");

router.post("/students", async (req, res) => {

    try {

        const student = new Student(req.body);

        const savedStudent = await student.save();

        res.status(201).json(savedStudent);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

router.put("/students/:id", async (req, res) => {

    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedStudent);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/students/:id", async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;
