import LoginInput from './LoginInput'
import '../../styles/auth/LoginForm.css'

function LoginForm() {
  return (
    <form className="login-form">
      <LoginInput
        label="Correo electrónico"
        type="email"
        id="email"
        placeholder="Ingresa tu correo"
      />

      <LoginInput
        label="Contraseña"
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña"
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