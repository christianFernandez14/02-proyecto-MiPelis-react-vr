import { useState } from "react"

const CrearPelicula = () => {

  const [peliSate, setPeliSate] = useState({
    titulo: '',
    descripcion: ''
  })

  const {titulo, descripcion} = peliSate


  const titleComponent = 'Añadir pelicula'

  const handleSubmit = e => {
    e.preventDefault()

    // Tomamos los datos del fomulario

    const target = e.target
    const titulo = target.titulo.value
    const descripcion = target.descripcion.value

    // Creamos el objeto de cada pelicula a guardar
    const pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    setPeliSate(pelicula)

  }


  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>

      <strong>
        {(titulo && descripcion) && 'Haz Añadido: '+titulo}
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