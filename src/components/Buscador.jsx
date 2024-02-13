import { useState } from "react"


const Buscador = ({ listadoState, setListadoState }) => {

  const [busqueda, setBusqueda] = useState('')

  const buscarPelicula = e => {
    // Creamos el estado y lo actulizamos
    setBusqueda(e.target.value)

    // Filtrar par buscar coincidencias
    let peliculasEncontradas = listadoState.filter(x => (
      x.titulo.toLowerCase().includes(busqueda.toLowerCase())
    ))

    if(busqueda.length <= 1 || peliculasEncontradas <= 0){
      peliculasEncontradas = JSON.parse(localStorage.getItem('Pelicula'))
    }

    // Actulizar estado del listado principal con lo que logre filtrar
    setListadoState(peliculasEncontradas)
  }

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPelicula}
        />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Buscador