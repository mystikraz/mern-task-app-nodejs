const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()
const Task = require("./models/taskModel")
const cors = require("cors")
const taskRoutes = require("./routes/taskRoute")

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({
    origin:["http://localhost:3000","https://mern-task-app-kre2.onrender.com"]
}))
app.use("/api/v1", taskRoutes)


const PORT = process.env.PORT || 5000

//Routes
app.get("/", (req, res) => {
    res.send("Home page")
})

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};
startServer();
