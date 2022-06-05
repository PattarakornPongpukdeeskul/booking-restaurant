import { register } from "../../model"

export const createUser = async (req, res, next) => {
  try {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const resBody = await register(name, email, password)

    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
