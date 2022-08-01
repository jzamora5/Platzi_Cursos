/**
 * Complejidad Temporal -> O(n)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 * Complejidad Espacial - Espacio de Entrada
 */
function linearSearch(arreglo, clave) {
  for (let indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}
