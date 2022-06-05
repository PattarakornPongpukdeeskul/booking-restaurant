import { databaseUser } from "../../database"

export const updateUserBooking = async (id, booking) => {
  const database = new databaseUser(id)
  database.booking = booking
  const dataUpdated = await database.updateUser()
  if (dataUpdated === "data not exist") {
    let resBody = {
      isError: true,
      data: dataUpdated,
      code: 403,
    }

    return resBody
  }

  delete dataUpdated["password"]
  let resBody = {
    isError: false,
    data: dataUpdated,
    code: 200,
  }

  return resBody
}
