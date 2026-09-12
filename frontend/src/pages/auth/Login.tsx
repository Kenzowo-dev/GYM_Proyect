import { useNavigate } from 'react-router-dom'
import LoginForm from '../../componentes/auth/LoginForm'
import '../../styles/auth/Login.css'

function Login() {
  const navigate = useNavigate()

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

        <button
          type="button"
          className="login-back-button"
          onClick={() => navigate('/')}
        >
          ← Volver al inicio
        </button>
      </section>
    </main>
  )
}

export default Login