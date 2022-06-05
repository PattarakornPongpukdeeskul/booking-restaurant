import express from "express"
import user from "./v1/user"
import auth from "./v1/authentication"
import restaurant from "./v1/restaurant"
import { middleware } from "../middleware"
const router = express.Router()

router.use("/v1/user", user)
router.use("/v1/auth", auth)
router.use("/v1/restaurant", restaurant)

export default router
