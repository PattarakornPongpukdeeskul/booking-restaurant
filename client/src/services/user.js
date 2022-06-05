import axios from 'axios'

export const createUser = async (email, name, password) => {
  try {
    const data = {
      email,
      name,
      password
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/v1/user`, data)

    return { data: response.data }
  } catch (error) {
    return {
      error
    }
  }
}
