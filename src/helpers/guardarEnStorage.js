
//  Creamos un servicio genérico
export const guardarEnStorage = (clave, elemento) => {
  // Conseguimos los elementos que ya tenemos en el LocalStorage
  let elementos = JSON.parse(localStorage.getItem(clave))

  // Comprobamos si es un Array 
  if(Array.isArray(elementos)){

    // Añadimos dentro del array un elemento nuevo
    elementos.push(elemento)
  }else{

    // Creamos un array con la nueva peli
    elementos = [elemento]
  }

  // Guardamos en el LocalStorage
  localStorage.setItem(clave, JSON.stringify(elementos))

  // Devolvemos el obejto guaardo - Por si deseas utilzar el ultimo creado
  return elemento
}
