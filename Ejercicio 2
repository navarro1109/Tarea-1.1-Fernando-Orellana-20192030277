// 2. Promesas encadenadas
function obtenerUsuario(id) {
  const usuarios = {
    1: { id: 1, nombre: 'Juan' },
    2: { id: 2, nombre: 'María' }
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usuarios[id]);
    }, 500);
  });
}

console.log('\n--promesas encadenadas ---');
obtenerUsuario(1)
  .then((usuario1) => {
    return obtenerUsuario(2).then((usuario2) => {
      console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
    });
  });
