
const Editar = ({ peli, conseguirPeliculas, setEditar,  setListadoState }) => {

  const { id, titulo, descripcion } = peli

  const titulo_componente = "Editar Película"

  const guardarEdicion = (e, id) => {
    e.preventDefault()

    // Consiguir el target del evento
    let target = e.target

    // Buscamos el indice del Objeto de la pelicula a actulizar
    const peliculasAlmacenadas = conseguirPeliculas()
    const indice = peliculasAlmacenadas.findIndex(x => x.id === id)

    // Creamos obejto con ese id de ese indice, con titulo y descripcion del fomrulario
    let peliculaActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }

    // Actulizamos el elemento con ese indice
    peliculasAlmacenadas[indice] = peliculaActualizada
   
    // Actulizamos el state
    setListadoState(peliculasAlmacenadas)
    setEditar(0)

    // Actulizamos el LocalStorage
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