
const CrearPelicula = () => {
  return (
    <div className="add">
      <h3 className="title">Añadir pelicula</h3>
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  )
}

export default CrearPelicula