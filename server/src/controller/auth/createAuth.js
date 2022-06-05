import { login } from '../../model'

export const createAuth = async (req, res, next) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const resBody = await login(email, password)

    res.cookie('accessToken', resBody.data)
    
    return res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
