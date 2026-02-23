
// 4. Copiar y modificar objetos
function modificarPersona(persona, nuevoNombre) {
  return { ...persona, nombre: nuevoNombre, edad: persona.edad + 1 };
}

const persona = { nombre: 'Luis', edad: 30 };
const nuevaPersona = modificarPersona(persona, 'Carlos');

console.log('\n--- Ejercicio 4: Copiar y modificar objetos ---');
console.log('Original:', persona);       // { nombre: 'Luis', edad: 30 }
console.log('Modificado:', nuevaPersona); // { nombre: 'Carlos', edad: 31 }
