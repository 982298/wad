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