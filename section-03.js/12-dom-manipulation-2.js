// Cómo manipular elementos en el DOM
// En esta sección vamos a ver:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
// El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
const createElement = document.createElement("div");
console.log("createElemente tiene esta estructura: ");
console.log(createElement);

// Establecer algun texto mediante unos keys de innerHTML o innerTEXT
// createElement.innerHTML = "JS es demasiado cool!";
createElement.innerText = "JS es demasiado cool";
console.log(createElement);

// Como anexar elemento creado en js al doc de HTML
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!

// Version - un solo selector
// let parentElement = document
//   .querySelector("#parent")
//   .appendChild(createElement);
// Version - anidada
let parentElement2 = document
  .querySelector("#parent #firstchild")
  .appendChild(createElement);

// añadir clase mediante JS  - EJEMPLO 001
createElement.className = "ejemplo1";
console.log(createElement);

//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>

// let newElement = document.createElement("div");

// newElement.setAttribute('id', "insert-p");
// let createP = document.createElement("p");

// document.querySelector('body').appendChild(newElement);
// document.querySelector("#insert-p").appendChild(createP);

// let createdElement = document.createElement("p");
// 2º - Crea un <div id="nested"></div> desde código
// let newDiv = document.createElement("div");
// newDiv.setAttribute('id', 'nested');
// document.querySelector('body').appendChild(newDiv);


//BUTTON

// 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>
const buttonEl = document.createElement("button");
buttonEl.setAttribute('id', 'button');
document.querySelector("body").appendChild(buttonEl);

const addFunction = () => buttonEl.classList.add("button");
buttonEl.addEventListener("click", addFunction);
const text = document.createElement("p");
// text.setAttribute('class', 'button');
document.querySelector("#button").appendChild(text);

// 2 - Crea un elemento de color verde y un botón para togglear el color de verde a rojo.

