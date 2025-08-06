// === 1. DOM SCRIPTING (146) ===

// --- 1.1 querySelector ---
const heading = document.querySelector('.header__texto h2');
// Usamos querySelector porque permite seleccionar elementos como en CSS, con clases, IDs o estructuras
// En este caso, seleccionamos el <h2> que está dentro del contenedor con clase .header__texto

heading.textContent = 'Nuevo Heading';
// Cambiamos el texto visible del <h2> a "Nuevo Heading"
// textContent modifica el contenido textual del elemento

console.log(heading); 
// Mostramos en consola el elemento para verificar el cambio


// --- 1.2 querySelectorAll ---
const enlace = document.querySelectorAll('.navegacion a');
console.log(enlace); 
// Imprimimos el NodeList completo de enlaces encontrados

console.log(enlace[0]); 
// Accedemos y mostramos en consola el primer enlace del NodeList

// Modificamos propiedades del primer enlace del menú de navegación
enlace[0].textContent = "Nuevo Enlace"; 
enlace[0].href = "https://music.youtube.com/"; 
enlace[0].classList.add("nueva-clase"); 
enlace[0].classList.remove("navegacion__enlace"); 


// --- 1.3 getElementById ---
const heading2 = document.getElementById('heading');
console.log(heading2); 
// Solo permite seleccionar por ID (no usa # ni combinaciones CSS)


// --- 1.4 Crear elementos dinámicamente ---
const nuevoEnlace = document.createElement('a');
nuevoEnlace.href = 'nuevo-enlace.html'; 
nuevoEnlace.textContent = 'Tienda'; 
nuevoEnlace.classList.add('navegacion__enlace'); 

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace); 
// Verificamos que el nuevo enlace se agregó correctamente al DOM



// === 2. EVENTOS DEL NAVEGADOR (147) ===

console.log(1); 
// Se imprime inmediatamente al cargar el script

window.addEventListener('load', function() {
    console.log(2);
});

function imprimir() {
    console.log(2);
}
window.addEventListener('load', imprimir);

window.onload = function () {
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
});

console.log(5); 
// Se imprime antes que los eventos porque no depende del tiempo de carga


// --- Evento scroll ---
window.onscroll = function() {
    console.log('Scroll...'); 
    // Se ejecuta cada vez que el usuario hace scroll en la página
};



// === 3. EVENTOS DE ELEMENTOS (148) ===

/* const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(e) {
    console.log(e); 
    e.preventDefault(); 
    console.log('formulario enviado'); 
}); */



// === 4. FORMULARIOS E INPUTS (149) ===

// --- 4.1 Objeto de datos del formulario ---
const datos = { 
    nombre: '',
    email: '',
    mensaje: ' '
};

const nombre = document.querySelector('#nombre'); 
const email = document.querySelector('#email'); 
const mensaje = document.querySelector('#mensaje'); 
const formulario = document.querySelector('.formulario'); 

/* nombre.addEventListener('input', function(e) {
    console.log('Escribiendo...'); 
    console.log(e.target.value);   
});

nombre.addEventListener('change', function() {
    console.clear(); 
    console.log('Se asigna nombre en el campo'); 
}); */


// --- 4.2 Inputs con función reutilizable ---
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto); 


// --- 4.3 Envío del formulario ---
formulario.addEventListener('submit', function(e){
    e.preventDefault(); 

    const {nombre, email, mensaje} = datos;

    if(nombre ==='' || email ==='' || mensaje ===''){
        mostrarError('Todos los campos son obligatorios'); 
        return;
    }

    mostrarEnvio('Formulario enviado');  
});


function leerTexto(e) {
    datos[e.target.id] = e.target.value; 
}


/* btnEnviar.addEventListener('click', function() {
    console.clear();
    console.log('se envia formulario'); 
}); */



// === 5. FUNCIONES AUXILIARES ===

function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

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
