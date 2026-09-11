import LoginInput from './LoginInput'

function LoginForm() {
  return (
    <form>
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

      <button type="submit">
        Ingresar
      </button>
    </form>
  )
}

export default LoginForm