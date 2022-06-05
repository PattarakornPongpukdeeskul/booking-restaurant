import { databaseUser, databaseAuth } from "../../database"
import { generateAccessToken, generateRefreshToken } from "../../helper"
import { v4 as uuidv4 } from "uuid"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const login = async (email, password) => {
  const idAuth = uuidv4()
  const dbUser = new databaseUser("", "", email, password)
  const userData = await dbUser.queryUser()
  if (userData) {
    const userId = userData.id
    const userName = userData.name

    const accessToken = await generateAccessToken(userId, userName, email)
    const refreshToken = await generateRefreshToken(userId)

    const { iat, exp } = jwt.verify(refreshToken, process.env.TOKEN_SECRET)
    const dbAuth = new databaseAuth(
      idAuth,
      userId,
      refreshToken,
      accessToken,
      iat,
      exp
    )
    dbAuth.createAuth()
    let resBody = {
      isError: false,
      data: { accessToken: accessToken },
      code: 201,
    }

    return resBody
  }

  let resBody = {
    isError: true,
    data: "email or password incorrect.",
    code: 401,
  }

  return resBody
}
