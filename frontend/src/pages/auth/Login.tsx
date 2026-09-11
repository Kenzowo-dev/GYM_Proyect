function Login() {
  return (
    <div>
      <h1>Mundo Fitness</h1>

      <h2>Iniciar sesión</h2>

      <form>
        <div>
          <label htmlFor="email">Correo electrónico</label>

          <input type="email" id="email" placeholder="Ingresa tu correo" />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>

          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
