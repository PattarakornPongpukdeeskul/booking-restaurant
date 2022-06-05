import { databaseRestaurant } from "../../database"

export const getRestaurantsData = async () => {
  const database = new databaseRestaurant()
  const dataUser = await database.getAllRestaurant()

  if (dataUser) {
    let resBody = {
      isError: false,
      data: dataUser,
      code: 200,
    }

    return resBody
  }

  let resBody = {
    isError: true,
    data: "not found",
    code: 404,
  }

  return resBody
}
