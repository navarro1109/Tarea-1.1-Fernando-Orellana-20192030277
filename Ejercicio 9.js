// 9. Simular carga con promesa y setTimeout
function cargarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos cargados correctamente');
    }, 2000);
  });
}

console.log('\n--- Ejercicio 9: Simular carga con setTimeout ---');
cargarDatos().then((mensaje) => {
  console.log(mensaje); // (después de 2 segundos) "Datos cargados correctamente"
});
