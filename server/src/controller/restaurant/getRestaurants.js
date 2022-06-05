import { getRestaurantsData } from "../../model"

export const getRestaurants = async (req, res, next) => {
  try {
    const resBody = await getRestaurantsData()
    
    res.status(resBody.code).json(resBody)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
