import express from "express"
import { getRestaurants, updateRestaurant, cancelBookingRestaurant } from "../../controller"

const restaurant = express.Router()

restaurant.get("/", getRestaurants)
restaurant.patch("/:id", updateRestaurant)
restaurant.patch("/cancel/:id", cancelBookingRestaurant)

export default restaurant
