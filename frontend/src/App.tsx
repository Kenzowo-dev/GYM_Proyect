import './App.css'

function App() {
  return (
     <div className="app"> 
     <header className="navbar"> 
      <div className="logo"> <span className="logo-icon">GYM</span> <span className="logo-text">FITNESS</span> 
      </div>

    <nav className="nav-links">
      <a href="#inicio">Inicio</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#ubicacion">Ubicación</a>
    </nav>

    <div className="auth-buttons">
      <button className="btn btn-login">Iniciar sesión</button>
      <button className="btn btn-register">Registrarse</button>
    </div>
  </header>

  <main>
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">TU MEJOR VERSIÓN COMIENZA AQUÍ</p>

        <h1>
          TRANSFORMA TU
          <span> CUERPO.</span>
          <br />
          SUPERA TUS
          <span> LÍMITES.</span>
        </h1>

        <p className="hero-description">
          Entrena con nosotros, alcanza tus objetivos y forma parte de una
          comunidad que busca superarse cada día.
        </p>

        <button className="btn btn-start">Comenzar ahora</button>
      </div>

      <div className="hero-image">
        <div className="image-placeholder">
          <span>IMAGEN DEL GIMNASIO</span>
          <small>Aquí colocaremos la imagen principal</small>
        </div>
      </div>
    </section>

    <section id="nosotros" className="about-section">
      <div className="section-title">
        <p>CONÓCENOS</p>
        <h2>Entrena. Mejora. <span>Supérate.</span></h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>Entrenamiento</h3>
          <p>
            Espacios y equipos pensados para ayudarte a alcanzar tus
            objetivos.
          </p>
        </div>

        <div className="about-card">
          <h3>Comunidad</h3>
          <p>
            Forma parte de una comunidad que comparte tu motivación y tus
            ganas de mejorar.
          </p>
        </div>

        <div className="about-card">
          <h3>Resultados</h3>
          <p>
            Trabaja constantemente y convierte tus metas en resultados
            reales.
          </p>
        </div>
      </div>
    </section>

    <section id="ubicacion" className="location-section">
      <div className="section-title">
        <p>VISÍTANOS</p>
        <h2>Encuentra <span>nuestro gimnasio.</span></h2>
      </div>

      <div className="location-content">
        <div className="location-info">
          <h3>¿Dónde estamos?</h3>

          <p>
            Ven a conocernos y comienza tu entrenamiento con nosotros.
          </p>

          <div className="address">
            <strong>Dirección</strong>
            <span>Dirección del gimnasio</span>
          </div>

          <button className="btn btn-map">
            Abrir en Google Maps
          </button>
        </div>

        <div className="map-container">
          <div className="map-placeholder">
            <span>GOOGLE MAPS</span>
            <small>Aquí colocaremos la ubicación del gimnasio</small>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer className="footer">
    <p>© 2026 GYM FITNESS. Todos los derechos reservados.</p>
  </footer>
</div>


)
}

export default App
