import { databaseUser } from "../../database"

export const getUserData = async (id) => {
  const database = new databaseUser(id)
  const dataUser = await database.queryUser()

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
