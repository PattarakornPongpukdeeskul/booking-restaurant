import { deleteUserAccount } from "../../model"

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const resBody = await deleteUserAccount(id)

    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
