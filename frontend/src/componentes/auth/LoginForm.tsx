import { useState } from 'react'
import LoginInput from './LoginInput'
import '../../styles/auth/LoginForm.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="login-form">
      <LoginInput
        label="Correo electrónico"
        type="email"
        id="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={setEmail}
      />

      <LoginInput
        label="Contraseña"
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={setPassword}
      />

      <button
        type="submit"
        className="login-button"
      >
        Ingresar
      </button>
    </form>
  )
}

export default LoginForm