//DOM scripting

// 1. querySelector -- va a retornar ninguno o hasta un elemento que concuerde con el selector que se esta escribiendo

/* const heading = document.querySelector('.header__texto h2'); // posterior a un punto seleccionamos la clase del div al cual pertenece ese h2 espacio seguido de la etiqueta, tambien se puede por un id asi document.querySelector('#heading') ya  que el ID es unico nos necesarioo especificar la etiqueta
heading.textContent = 'Nuevo Heading'; //en firefox developer edition podemos tener acceso a todas las propiedades de ese elemento, no la smuestra tooas peo nos damos una idea, una de esas propiedades es textContent por medio del cual accedemos al contenido del elemento y le asignamoso un nuevo valor llamado 'Nuevo Heading'
console.log(heading);




// 2. querySelectorAll

const enlace = document.querySelectorAll('.navegacion a'); //retorna todos los elementos que concuerden con el criterio de busqueda
console.log(enlace);
console.log(enlace[0]);//imprime lo que pertenece al enlace ubicado en el indice 0 que para este ejercicio seria el de nosotros
enlace[0].textContent = "Nuevo Enlace"; //igualmente puedo acceder a las propiedades del elemento para esta linea del elemento 0 es decir el enlace con el nombre "nosotros"
enlace[0].href = "https://music.youtube.com/"; //redireciona a dnde te envía el enlace
enlace[0].classList.add("nueva-clase"); //agrega una clase nueva, como ya sabe que es una clase no requiere el punto al inicio.
enlace[0].classList.remove("navegacion__enlace");//elimina una clase, como ya sabe que es una clase no requiere el punto al inicio.



// 3. getElementById -- e muy similas la estrucrtura aun que no la usalremos solo es por conocer como funciona

const heading2 = document.getElementById('heading');
console.log(heading2);*/

//Crear HTML con createElement

const nuevoEnlace = document.createElement('A'); // Crea una nueva etiqueta en HTML de debe asignar dentro de los parametros de createElement y debe ir entre comillas dobles o sencillas y adicionalmente el nombre de la etiqueta en mayusculas, en el html se vera normal en minusculas, 

// Crear href
nuevoEnlace.href = 'nuevo-enlace.html';
//crear el texto
nuevoEnlace.textContent = 'Tienda';
//crear la clase
nuevoEnlace.classList.add('navegacion__enlace'); //le asigne la misma clase que ya tenian los dems enlaces parq eut tome las caracteristicas ya ddefinidad del CSS
//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace) // esta es a funcion que nos permite agregar un elemento, es decir toma la variable llamda nuevoEnlace y la introduce o la agrega en el html donde encuentra la clase.navegacion" 


console.log(nuevoEnlace);