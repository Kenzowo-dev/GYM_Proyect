import LoginForm from '../../componentes/auth/LoginForm'
import '../../styles/auth/Login.css'

interface LoginProps {
  onBack: () => void
}

function Login({ onBack }: LoginProps) {
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
          onClick={onBack}
        >
          ← Volver al inicio
        </button>
      </section>
    </main>
  )
}

export default Login