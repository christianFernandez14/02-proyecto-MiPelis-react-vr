import { useState } from "react"

import Listado from "./components/Listado"
import Buscador from "./components/Buscador"
import CrearPelicula from "./components/CrearPelicula"

const App = () => {
  const [listadoState, setListadoState] = useState([])

  return (
    <div className="layout">

      {/* Cebecera  */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/* Barra de navegacion */}
      <nav className="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Pelicula</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">

        {/*Aca va le listado de peliculas */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador />
        <CrearPelicula
          setListadoState={setListadoState}
        />
      </aside>

      {/* Pie de pagina */}
      <footer className="footer">&copy; Master en JavaScript E12 y TypeScript</footer>
    </div>
  )
}

export default App
