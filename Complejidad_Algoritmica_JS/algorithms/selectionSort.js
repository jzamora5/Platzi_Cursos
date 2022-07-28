/**
 * Complejidad Temporal -> O(n^2)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */
function selectionSort(arreglo) {
  let longitud = arreglo.length;

  for (let i = 0; i < longitud; i++) {
    let minimo = i;
    for (let j = i + 1; j < longitud; j++) {
      if (arreglo[j] < arreglo[minimo]) {
        minimo = j;
      }
    }
    if (minimo != i) {
      let temporal = arreglo[i];
      arreglo[i] = arreglo[minimo];
      arreglo[minimo] = temporal;
    }
  }
  return arreglo;
}
