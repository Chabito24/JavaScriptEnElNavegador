// DOM scripting (146)

// === 1. querySelector ===
// Selecciona el primer elemento que coincida con el selector CSS
const heading = document.querySelector('.header__texto h2');
// ¿Por qué usar querySelector? Porque permite seleccionar con sintaxis CSS.
// En este caso, se busca el h2 dentro de un contenedor con clase .header__texto

heading.textContent = 'Nuevo Heading';
// Cambiamos el contenido del h2 por "Nuevo Heading"
// Usamos textContent porque es una propiedad que modifica el texto visible del elemento

console.log(heading); // Verificamos en consola el resultado


// === 2. querySelectorAll ===
// Selecciona todos los <a> dentro del nav con clase .navegacion
const enlace = document.querySelectorAll('.navegacion a');
console.log(enlace); // Muestra todos los enlaces

console.log(enlace[0]); // Accedemos al primer enlace del array (índice 0)

// Modificamos propiedades del primer enlace
enlace[0].textContent = "Nuevo Enlace"; // Cambiamos el texto
enlace[0].href = "https://music.youtube.com/"; // Cambiamos el destino del enlace
enlace[0].classList.add("nueva-clase"); // Agregamos una nueva clase
enlace[0].classList.remove("navegacion__enlace"); // Quitamos la clase anterior


// === 3. getElementById ===
// Alternativa a querySelector para seleccionar por ID
const heading2 = document.getElementById('heading');
console.log(heading2); // ¿Qué diferencias hay con querySelector? Solo acepta ID y no usa #


// === CREAR UNA VARIABLE DESDE JS ===

// Creamos un nuevo enlace <a>
const nuevoEnlace = document.createElement('a');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Tienda';
nuevoEnlace.classList.add('navegacion__enlace'); // Reutilizamos clase existente para que tome estilo

// Agregamos el nuevo enlace al DOM dentro del nav
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace); // Verificamos que se agregó correctamente


// === EVENTOS EN JS (147) ===

console.log(1); // Se ejecuta inmediatamente

// Evento que espera a que todo el sitio (HTML, CSS, imágenes) esté listo
window.addEventListener('load', function() {
    console.log(2);
});

// Misma función anterior pero separando la función
function imprimir() {
    console.log(2);
}
window.addEventListener('load', imprimir);

// Otra forma de escuchar el evento load
window.onload = function () {
    console.log(3);
};

// Evento que solo espera a que el DOM esté listo (más rápido que load)
document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
});

console.log(5); // Se imprime antes que los eventos anteriores


// === Evento scroll ===
window.onscroll = function() {
    console.log('Scroll...'); // Se ejecuta cada vez que el usuario hace scroll
};


// === ASOCIAR EVENTOS A ELEMENTOS (148) ===

/*const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(e) {//e puede ser cualquier nombre, hace referencia al evento.
    console.log(e); // Imprime el objeto del evento
    e.preventDefault(); // Evita que el formulario se envíe automáticamente, lo uso par avalidar un formulario.
    console.log('formulario enviado'); // Simulación de envío (por ahora solo consola)
});*/


// === EVENTOS DE LOS INPUTS Y TEXTAREA (149) ===

//evento de submit



const datos = { 
    nombre: '',
    email: '',
    mensaje: ' '
} // creamos un objeto con una variable llamada datos con los datos del formulario

const nombre = document.querySelector('#nombre');// Seleccionamos el input con el ID "nombre"
const email = document.querySelector('#email');// Seleccionamos el input con el ID "email"
const mensaje = document.querySelector('#mensaje');// Seleccionamos el input con el ID "mensaje"
const formulario = document.querySelector('.formulario');

/*// Evento que se dispara cada vez que el usuario escribe en el campo
nombre.addEventListener('input', function(e) {
    console.log('Escribiendo...'); // Muestra el mensaje en tiempo real mientras se escribe
    console.log(e.target.value);   // Muestra el valor actual del input en consola
});

// Evento que se dispara cuando el usuario termina de escribir y sale del campo
nombre.addEventListener('change', function() {
    console.clear(); // Limpia todos los mensajes previos de la consola
    console.log('Se asigna nombre en el campo'); // Muestra mensaje final al confirmar el cambio
});*/

//Cambio por menos lineas de codigo


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto); // seleccionamos los id que requerimos

//envento de submit 

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar el formulario

    const {nombre, email, mensaje} = datos// aplicamos destructuring

    if(nombre ==='' || email ==='' || mensaje ===''){
        mostrarError('Todos los campos son obligatorios');
    
        return;
         //enviar el formulario

    }

     mostrarEnvio('Formulario enviado');  
});






function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value; // asigna los valores de los campos en el evento, toma en cuenta el id 
    // console.log(e.target);
    //console.log(datos); // imprime los datos con el valor del id.
} // imprime en consola cada dato incorporado en el formulario de nombre a mensaje

/*btnEnviar.addEventListener('click', function() {
    console.clear();
    console.log('se envia formulario') // este esta asociado al boton no al formulari para el formulario se usa submit ver linea 98
})*/ // limpia la consola e imprime el mensaje de envío



//muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //desaparezca despues de 5 segundos

    setTimeout(()=>{
        error.remove();
    }, 3000);
}

function mostrarEnvio(mensaje) {
    const correcto = document.createElement('p');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

    setTimeout(()=>{
        correcto.remove();
    }, 3000);
}



