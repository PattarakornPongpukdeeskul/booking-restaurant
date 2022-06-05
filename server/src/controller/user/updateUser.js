import { updateUserData } from "../../model"

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    

    const resBody = await updateUserData(id, name, email, password)

    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
