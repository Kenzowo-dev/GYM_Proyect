import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    setError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone ||
      !formData.birthDate ||
      !formData.gender
    ) {
      setError('Por favor, completa todos los campos.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    setError('')
    setSuccess(true)
  }

  if (success) {
    return (
      <section className="register-page">
        <div className="register-card success-card">
          <div className="register-logo">
            <img
              src="/src/assets/Logo.png"
              alt="Mundo Fitness"
              className="logo-image"
            />
          </div>

          <div className="success-icon">✓</div>

          <h1>¡Registro exitoso!</h1>

          <p>
            Tu cuenta ha sido creada correctamente. Ya puedes comenzar a
            disfrutar de tu experiencia en Mundo Fitness.
          </p>

          <button
            type="button"
            className="btn btn-start"
            onClick={() => navigate('/')}
          >
            Volver al inicio
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="register-page">
      <div className="register-card">
        <div className="register-logo">
          <img
            src="/src/assets/Logo.png"
            alt="Mundo Fitness"
            className="logo-image"
          />
        </div>

        <div className="register-header">
          <p>ÚNETE A NOSOTROS</p>
          <h1>Crear una cuenta</h1>
          <span>
            Completa tus datos para comenzar tu experiencia.
          </span>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Número de teléfono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ej. 987654321"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate">Fecha de nacimiento</label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Género</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn register-submit">
            Crear cuenta
          </button>
        </form>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Volver al inicio
        </button>
      </div>
    </section>
  )
}

export default Register