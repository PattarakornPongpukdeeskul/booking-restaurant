import { updateUserBooking } from "../../model"

export const updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params
    const booking = req.body

    const resBody = await updateUserBooking(id, booking)

    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
