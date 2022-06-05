import express from "express"
import {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  updateBooking,
} from "../../controller"
import { middleware } from "../../middleware"

const user = express.Router()

user.post("/", createUser)
user.patch("/:id", middleware, updateUser)
user.patch("/booking/:id", middleware, updateBooking)
user.get("/:id", middleware, getUser)
user.delete("/:id", middleware, deleteUser)

export default user
