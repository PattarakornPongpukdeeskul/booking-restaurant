import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const middleware = async (req, res, next) => {

  const accessToken = req.cookies.accessToken.accessToken
  const dateTime = Date.now()
  const accessUrl = process.env.WEB_APP_URL || "localhost:3000"

  try {
    const { iat, iss } = jwt.verify(accessToken, process.env.TOKEN_SECRET)
    
    if (iss !== accessUrl) {
      let resBody = {
        isError: false,
        data: 'token expired',
        code: 401,
      }

      res.cookie('accessToken', resBody.data)
      res.status(resBody.code).json(resBody)
    }

    if (dateTime - iat > 10800000) {
      let resBody = {
        isError: false,
        data: '',
        code: 401,
      }

      res.cookie('accessToken', resBody.data)
      res.status(resBody.code).json(resBody)
    }
    next()

  } catch {
    let resBody = {
      isError: false,
      data: 'invalid token',
      code: 401,
    }
    res.status(resBody.code).json(resBody)
  }
}
