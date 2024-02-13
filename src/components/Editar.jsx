
const Editar = ({ peli, conseguirPeliculas, setEditar,  setListadoState }) => {

  const { id, titulo, descripcion } = peli

  const titulo_componente = "Editar Película"

  const guardarEdicion = (e, id) => {
    e.preventDefault()

    let target = e.target

    const peliculasAlmacenadas = conseguirPeliculas()
    const indice = peliculasAlmacenadas.findIndex(x => x.id === id)

    let peliculaActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }

    peliculasAlmacenadas[indice] = peliculaActualizada

    setListadoState(peliculasAlmacenadas)
    setEditar(0)

    localStorage.setItem('Pelicula', JSON.stringify(peliculasAlmacenadas))

   

  }
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={titulo}
        />

        < textarea
          name="descripcion"
          defaultValue={descripcion}
          className="descripcion_editada"
        />

        <input
          type="submit"
          className="editar"
          value="Actulizar" />
      </form>
    </div>
  )
}

export default Editar