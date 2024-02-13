import { useEffect, useState } from "react"

const Listado = ({ listadoState, setListadoState }) => {


  useEffect(() => {
    conseguirPeliculas()
  }, [])


  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('Pelicula'))

    setListadoState(peliculas)
  }


  return (
    <>
      {!listadoState
        ? <h1>No hay peliculas que mostrar</h1>
        : listadoState.map(peli => (
          <article
            key={peli.id}
            className="peli-item"
          >
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>

        ))}
    </>
  )
}

export default Listado