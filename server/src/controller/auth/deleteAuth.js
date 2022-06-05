import { logout } from "../../model"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const deleteAuth = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization
    const accessTokenDecode = jwt.verify(accessToken, process.env.TOKEN_SECRET)    
    const { sub } = accessTokenDecode
    const resBody = await logout(sub)

    res.cookie('accessToken', '')
    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
