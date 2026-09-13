import LoginForm from '../../componentes/auth/LoginForm'
import '../../styles/auth/Login.css'

export default function Login() {
  return (
    <div className="login-page-container">
      <div className="login-card-dark">
        <div className="card-top-accent"></div>
        <LoginForm />
      </div>
    </div>
  )
}