import { useState } from 'react'

interface LoginInputProps {
  label: string
  type: 'text' | 'email' | 'password'
  id: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

function LoginInput({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
}: LoginInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType =
    type === 'password' && showPassword
      ? 'text'
      : type

  return (
    <div className="login-field">
      <label htmlFor={id}>
        {label}
      </label>

      <div className="login-input-container">
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />

        {type === 'password' && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>
    </div>
  )
}

export default LoginInput