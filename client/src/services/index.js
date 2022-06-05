import axios from 'axios'

axios.defaults.withCredentials = true

export { createUser } from './user'
export { createAuth, deleteAuth } from './authentication'
export { getRestaurant } from './restaurant'
