import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

import { Style } from './style'
import { createUser, createAuth } from '../../services'
import { loginState } from '../../recoil/atom'

export const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const setLogin = useSetRecoilState(loginState)
  const navigate = useNavigate()

  const login = async () => {
    const { data } = await createAuth(email, password)

    if (data) {
      await setLogin(data.data.accessToken)
      navigate('/')
    }
  }

  const register = async (event) => {
    event.preventDefault()
    const { data, error } = await createUser(email, name, password)

    if (data) {
      login()
    }

    if (error) {
      setErr(error.response.data.data)
      return
    }
  }

  return (
    <Style>
      <div className="form-tab">
        <p className="error">{err}</p>
        <form className="form-register" onSubmit={register}>
          <p>
            <label>USERNAME : </label>
            <input
              type="text"
              placeholder="your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </p>
          <p>
            <label>EMAIL ADDRESS : </label>
            <input
              type="text"
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </p>
          <p>
            <label>PASSWORD : </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <p>
            <button type="submit">Create User</button>
          </p>
        </form>
      </div>
    </Style>
  )
}
