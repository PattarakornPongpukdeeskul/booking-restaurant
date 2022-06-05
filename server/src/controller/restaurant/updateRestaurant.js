import { bookingRestaurant, cancelBooking } from "../../model"

export const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params
    const booking = req.body
    

    const resBody = await bookingRestaurant(id, booking)

    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const cancelBookingRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params
    const idBooking = req.body.idBooking
    

    const resBody = await cancelBooking(id, idBooking)

    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}


