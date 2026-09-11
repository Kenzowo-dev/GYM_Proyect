interface LoginInputProps {
  label: string
  type: 'text' | 'email' | 'password'
  id: string
  placeholder: string
}

function LoginInput({
  label,
  type,
  id,
  placeholder,
}: LoginInputProps) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default LoginInput