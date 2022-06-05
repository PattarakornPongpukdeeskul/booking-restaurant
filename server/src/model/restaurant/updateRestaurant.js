import { databaseRestaurant } from "../../database"

export const bookingRestaurant = async (id, booking) => {
  const database = new databaseRestaurant(Number(id))
  const dataRestaurant = await database.getOneRestaurant()
  const oldBooking = dataRestaurant.booking
  const isAlreadyBook = oldBooking.some(
    (data) =>
      data.userId === booking.userId && data.timeBooking === booking.timeBooking
  )

  if (isAlreadyBook) {
    let resBody = {
      isError: true,
      data: "already booked",
      code: 403,
    }

    return resBody
  }

  const idBooking = oldBooking.length
  booking.id = idBooking

  const newBooking = [...oldBooking]
  newBooking.push(booking)

  database.booking = newBooking
  const dataUpdated = await database.updateRestaurant()

  if (dataUpdated === "data not exist") {
    let resBody = {
      isError: true,
      data: dataUpdated,
      code: 403,
    }

    return resBody
  }

  const bookingUserUpdated = dataUpdated.booking.filter(
    (data) => data.userId === booking.userId
  )
  dataUpdated.booking = bookingUserUpdated

  let resBody = {
    isError: false,
    data: dataUpdated,
    code: 200,
  }

  return resBody
}

export const cancelBooking = async (id, idBooking) => {
  const database = new databaseRestaurant(Number(id))
  const dataRestaurant = await database.getOneRestaurant()
  const alreadyBooking = dataRestaurant.booking
  const deletedBooking = alreadyBooking.filter(
    (data) => data.id === Number(idBooking)
  )

  if (deletedBooking) {
    const newBooking = alreadyBooking.filter(
      (data) => data.id !== Number(idBooking)
    )

    database.booking = newBooking
    

    const dataUpdated = await database.updateRestaurant()

    if (dataUpdated === "data not exist") {
      let resBody = {
        isError: true,
        data: dataUserUpdated,
        code: 403,
      }

      return resBody
    }

    let resBody = {
      isError: false,
      data: "cancel success",
      code: 204,
    }

    return resBody
  }

  let resBody = {
    isError: true,
    data: "no booking",
    code: 403,
  }

  return resBody
}
