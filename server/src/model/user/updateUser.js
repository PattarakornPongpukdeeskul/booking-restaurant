import { databaseUser } from "../../database"

export const updateUserData = async (id, name, email, password) => {
  const database = new databaseUser(id, name, email, password)
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
