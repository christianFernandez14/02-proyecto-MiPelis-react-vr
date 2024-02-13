import { useState } from "react"

import { guardarEnStorage } from "../helpers/guardarEnStorage"

const CrearPelicula = ({ setListadoState }) => {

  const [peliSate, setPeliSate] = useState({
    titulo: '',
    descripcion: ''
  })

  const { titulo, descripcion } = peliSate


  const titleComponent = 'Añadir pelicula'

  const handleSubmit = e => {
    e.preventDefault()

    const target = e.target
    const titulo = target.titulo.value
    const descripcion = target.descripcion.value

    const pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    setPeliSate(pelicula)

    setListadoState(elementos => {
      return [...elementos, pelicula]
    })

    guardarEnStorage("Pelicula", pelicula)

  }

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>

      <strong>
        {(titulo && descripcion) && 'Haz Añadido: ' + titulo}
      </strong>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Titulo"
          name="titulo"
          id="titulo"
        />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripcion"
        ></textarea>
        <input
          type="submit"
          id="save"
          value="Guardar"
        />

      </form>
    </div>
  )
}

export default CrearPelicula