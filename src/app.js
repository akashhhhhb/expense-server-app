const express = require('express')
const dbConnect = require("./config/dbConnect");
const { registerUser}  = require("./controllers/users/usersCtrl")
const userRoute = require("./routes/users/usersRoute")
const {errorHandler,notFound} = require("./middlewares/errorMiddleware")
const dotenv = require("dotenv")


const app = express()
dotenv.config()


const logger = (req,res,next) =>{

    console.log("logger")
    next()
}

app.use(logger)

app.use(express.json())


dbConnect()


app.use("/api/users",userRoute)

app.use(errorHandler)
app.use(notFound)


module.exports = app