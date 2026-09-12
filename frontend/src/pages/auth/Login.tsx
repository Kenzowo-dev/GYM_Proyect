import LoginForm from '../../componentes/auth/LoginForm'
import '../../styles/auth/Login.css'

function Login() {
  return (
    <main className="login-page">
      <section className="login-container">
        <h1 className="login-title">
          Mundo Fitness
        </h1>

        <h2 className="login-subtitle">
          Iniciar sesión
        </h2>

        <LoginForm />
      </section>
    </main>
  )
}

export default Login