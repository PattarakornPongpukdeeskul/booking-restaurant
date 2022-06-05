import express from "express"
import { createAuth, updateAuth, deleteAuth } from "../../controller"
import { middleware } from "../../middleware"

const auth = express.Router()

auth.post("/", createAuth)
auth.patch("/", middleware, updateAuth)
auth.delete("/", middleware, deleteAuth)

export default auth
