import { useEffect } from 'react'
import axios from 'axios'

export const Config = () => {
  axios.defaults.withCredentials = true

  useEffect(() => {
    window.process = {
      ...window.process
    }
  }, [])
}
