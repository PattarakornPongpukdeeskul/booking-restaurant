import { getUserData } from "../../model"

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const resBody = await getUserData(id)
    
    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
