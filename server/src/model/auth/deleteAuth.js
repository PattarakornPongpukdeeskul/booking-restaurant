import { databaseAuth } from "../../database"

export const logout = async (userId) => {
  const database = new databaseAuth("", userId)
  const dataAuth = await database.queryAuth()
  console.log(userId)
  database.id = dataAuth.id

  const deleteSuccess = await database.deleteAuth()
  if (deleteSuccess) {
    let resBody = {
      isError: false,
      data: "user logout",
      code: 204,
    }

    return resBody
  }

  let resBody = {
    isError: true,
    data: "logout failed",
    code: 404,
  }

  return resBody
}
