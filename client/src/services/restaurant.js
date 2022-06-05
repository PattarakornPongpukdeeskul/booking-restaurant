import axios from 'axios'

export const getRestaurant = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/v1/restaurant`)
    console.log(response.data)
    return { data: response.data }
  } catch (error) {
    return {
      error
    }
  }
}
