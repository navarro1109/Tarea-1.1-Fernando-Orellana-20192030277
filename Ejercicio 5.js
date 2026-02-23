// 5. Eliminar duplicados por propiedad
function eliminarDuplicados(arreglo, propiedad) {
  const vistos = new Set();
  return arreglo.filter((elemento) => {
    const valor = elemento[propiedad];
    if (vistos.has(valor)) return false;
    vistos.add(valor);
    return true;
  });
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

console.log('\n---eliminar duplicados ---');
console.log(eliminarDuplicados(elementos, 'id'));
// [{ id: 1, nombre: 'A' }, { id: 2, nombre: 'B' }]
