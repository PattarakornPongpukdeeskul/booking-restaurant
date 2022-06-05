import { refreshToken } from "../../model"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const updateAuth = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization
    const accessTokenDecode = jwt.verify(accessToken, process.env.TOKEN_SECRET)    
    const { sub, name, email } = accessTokenDecode
    const resBody = await refreshToken(sub, name, email)

    res.cookie('accessToken', resBody.data)
    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
