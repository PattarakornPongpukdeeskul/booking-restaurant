import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

import { Style } from './style'
import { createAuth } from '../../services'
import { loginState } from '../../recoil/atom'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const setLogin = useSetRecoilState(loginState)
  const navigate = useNavigate()

  const login = async (event) => {
    event.preventDefault()
    const { data, error } = await createAuth(email, password)

    if (data) {
      await setLogin(data.data.accessToken)
      navigate('/')
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
        <form className="form-login" onSubmit={login}>
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
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    </Style>
  )
}
