import express from "express"
import * as controller from "../controller/userController.js"

const router = express.Router()

router
    .get("/", controller.getAllUser)
    .get("/:id", controller.getUser)
    .put("/:id", controller.editUser)
    .delete("/:id", controller.deleteUser)
    .post("/", controller.saveUser)

export default router