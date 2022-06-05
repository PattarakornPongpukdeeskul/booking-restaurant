import axios from 'axios'

export const createAuth = async (email, password) => {
  try {
    const data = {
      email,
      password
    }

    const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/v1/auth`, data)

    return { data: response.data }
  } catch (error) {
    return {
      error
    }
  }
}

export const deleteAuth = async (accessToken) => {
  try {
    const config = {
      headers: {
        Authorization: accessToken
      }
    }

    const response = await axios.delete(`${process.env.REACT_APP_BASE_API_URL}/v1/auth`, config)

    if (response.status === 204) {
      return { data: true }
    }
  } catch (error) {
    return {
      error
    }
  }
}
