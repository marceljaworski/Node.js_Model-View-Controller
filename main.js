
import express from "express"

import userRouter from "./router/userRouter.js"
// import recordRouter from "./router/recordRouter.js"


const app = express()
const PORT = 3005

app.listen(PORT, ()=> {
    console.log("Server is listen on " + PORT)
})

app.use(express.json()) //JSON parser

app.use("/user", userRouter)
// server.use("/records", recordRouter)

