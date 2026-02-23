// 8. Filtrar objetos por múltiples condiciones
function filtrarDisponibles(productos, categoria) {
  return productos.filter(
    (producto) => producto.categoria === categoria && producto.stock > 0
  );
}

const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

console.log('\n--filtrar por categoría y stock ---');
console.log(filtrarDisponibles(productos, 'ropa'));
// [{ nombre: 'Camisa', categoria: 'ropa', stock: 10 }]

