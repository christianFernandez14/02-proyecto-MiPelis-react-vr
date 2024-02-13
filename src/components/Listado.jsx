import { useEffect, useState } from "react"

import Editar from "./Editar"

const Listado = ({ listadoState, setListadoState }) => {

  const [editar, setEditar] = useState(0)


  useEffect(() => {
    conseguirPeliculas()
  }, [])


  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('Pelicula'))

    setListadoState(peliculas)

    return peliculas
  }

  const borrarPelicula = id => {

    let peliculasAlmacendas = conseguirPeliculas()

    let nuevoListadoPeliculas = peliculasAlmacendas.filter(x => (x.id !== parseInt(id)))

    setListadoState(nuevoListadoPeliculas)

    localStorage.setItem('Pelicula', JSON.stringify(nuevoListadoPeliculas))

  }


  return (
    <>
      {!listadoState.length
        ? <h1>No hay peliculas que mostrar</h1>
        : listadoState.map(peli => (
          <article
            key={peli.id}
            className="peli-item"
          >
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button
              className="edit"
              onClick={() => setEditar(peli.id)}
            >Editar</button>

            <button
              className="delete"
              onClick={() => borrarPelicula(peli.id)}
            >Borrar</button>

            {/* Aparecera un formulario par editar la informacion */}
            {editar === peli.id && (
              <Editar
                peli={peli}
                conseguirPeliculas={conseguirPeliculas}
                setEditar={setEditar}
                setListadoState={setListadoState}
              />
            )}

          </article>

        ))}
    </>
  )
}

export default Listado