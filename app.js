 const amigos = [];
 function agregarAmigo(){
 const input = document.getElementById('amigo');
 const nombre = input.value.trim();
  // Validar que el campo no esté vacío
 if (nombre == ''){
    alert('por favor ingrese un nombre');
    return;
 }
 // Agregar nombre al array
 amigos.push(nombre);
 // Limpiar el campo de entrada
 input.value = '' ;
// Actualizar la visualización de la lista
mostrarLista();
};
function mostrarLista(){
const lista = document.getElementById('listaAmigos');
lista.innerHTML = '';//limpiar contenido anterior
amigos.forEach(amigo=>{
    const item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
});
}
/**
 * Función para sortear un amigo al azar
 */
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior
  
    // Validar si hay amigos
    if (amigos.length === 0) {
      alert('Debe añadir al menos un nombre antes de sortear.');
      return;
    }
  
    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];
  
    // Mostrar el resultado
    const item = document.createElement('li');
    item.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(item);
  }
  