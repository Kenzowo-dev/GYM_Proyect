import { Link } from 'react-router-dom'
import LoginForm from '../../componentes/auth/LoginForm'
import '../../styles/auth/Login.css'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Mundo Fitness</h1>
        <h2 className="login-subtitle">Iniciar sesión</h2>

        <LoginForm />

        <div className="login-footer">
          <Link to="/" className="back-link">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}