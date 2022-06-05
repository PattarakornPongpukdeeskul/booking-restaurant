import { databaseAuth } from "../../database"
import { generateAccessToken } from "../../helper"

export const refreshToken = async (userId, userName, email) => {
  const database = new databaseAuth("", userId)
  const dataAuth = await database.queryAuth()
  const accessToken = await generateAccessToken(userId, userName, email)

  database.id = dataAuth.id
  database.accessToken = accessToken
  const dateTime = Date.now()
  const dataUpdated = await database.updateAuth()
  const expRefreshToken = dataAuth.expiredAt
  const isExpired = dateTime - expRefreshToken > 0 ? true : false

  if (isExpired) {
    let resBody = {
      isError: true,
      data: '',
      code: 401,
    }

    return resBody
  }

  if (dataUpdated === "data not exist") {
    let resBody = {
      isError: true,
      data: '',
      code: 403,
    }

    return resBody
  }

  let resBody = {
    isError: false,
    data: { accessToken: dataUpdated.accessToken },
    code: 200,
  }

  return resBody
}
