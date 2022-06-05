import { databaseUser } from "../../database"
import { v4 as uuidv4 } from "uuid"

export const register = async (name, email, password) => {
  const idUser = uuidv4()

  let database = new databaseUser(idUser, name, email, password)
  const allUser = await database.getAllUsers()
  const emailExist = allUser.some((data) => data.email === email)

  if (emailExist) {
    return {
      isError: true,
      data: "this email already register",
      code: 403,
    }
  }

  const dataCreated = await database.createUser()

  const dataUser = {
    "id": dataCreated.id,
    "name": dataCreated.name,
    "email": dataCreated.email,
    "booking": []
}
  const resBody = {
    isError: false,
    data: dataUser,
    code: 201,
  }

  return resBody
}
