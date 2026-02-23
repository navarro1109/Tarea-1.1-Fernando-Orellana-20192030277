// 1. Agrupar elementos por propiedad
function agruparPorPropiedad(arreglo, propiedad) {
  return arreglo.reduce((acumulador, elemento) => {
    const clave = elemento[propiedad];
    if (!acumulador[clave]) {
      acumulador[clave] = [];
    }
    acumulador[clave].push(elemento);
    return acumulador;
  }, {});
}

const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

console.log('--agrupar por propiedad ---');
console.log(agruparPorPropiedad(datos, 'categoria'));

