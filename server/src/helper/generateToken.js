import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"
import dotenv from 'dotenv'

dotenv.config()

export const generateAccessToken = async (userId, name, email) => {
  const jti = uuidv4()
  const dateTime = Date.now()

  const accessToken = jwt.sign(
    {
      exp: dateTime + 600000, // 10min
      iat: dateTime,
      jti: jti,
      iss: process.env.WEB_APP_URL || "localhost:3000",
      sub: userId,
      typ: "Bearer",
      resources_access: "admin",
      name: name,
      email: email,
    },
    process.env.TOKEN_SECRET
  )

  return accessToken
}

export const generateRefreshToken = async (userId) => {
  let dateTime = Date.now()
  const jti = uuidv4()
  const refreshToken = jwt.sign(
    {
      exp: dateTime + 86400000, // 1 day
      iat: dateTime,
      jti: jti,
      iss: process.env.WEB_APP_URL || "localhost:3000",
      sub: userId,
      typ: "Refresh",
      teams: "",
    },
    process.env.TOKEN_SECRET
  )

  return refreshToken
}
