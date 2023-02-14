const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController")

const Task = require("../models/taskModel")
const router = express.Router()

router.post("/tasks", createTask)
router.get("/tasks", getTasks)
router.get("/task/:id", getTask)
router.delete("/task/:id", deleteTask)
router.put("/task/:id", updateTask)
router.patch("/task/:id", updateTask)

// router.route("/tasks").get(getTasks).post(createTask) another way 

module.exports = router