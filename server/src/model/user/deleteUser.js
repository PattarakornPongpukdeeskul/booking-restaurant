import { databaseUser } from "../../database"

export const deleteUserAccount = async (id) => {
  const database = new databaseUser(id)
  const deleteSuccess = await database.deleteUser()
  if (deleteSuccess) {
    let resBody = {
      isError: false,
      data: "user deleted",
      code: 204,
    }

    return resBody
  }

  let resBody = {
    isError: true,
    data: "user not exist",
    code: 404,
  }

  return resBody
}
