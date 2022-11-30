# HTML Basics <img src="/section-01-html/assets/htmlLogo.png" width="50">
Este es un repositorio con notas y ejemplos sobre HTML y CSS
<p align="center">
Creado por Clara Jiménez :smiling_face_with_three_hearts:
<p/>

## 16/11
JavaScript, manipulación de DOM. Realización del laboratorio de Funciones y Arrays.


Algunos métodos de DOM manipulation:

`getElementById()` La forma más común de acceder a un elemento HTML es utilizar el id del elemento.
```bash
$ console.log(document.getElementById("wutang"));
```

`getElementsByClassName()` Este método devuelve una colección de todos los elementos del documento con el nombre de clase especificado.
```bash
$ console.log(document.getElementsByClassName("wuTang"));
$ console.log(document.getElementsByClassName("wuTang")[1]);
```

`getElementsByTagName()` Este método acepta un nombre de etiqueta y devuelve todos los elementos del nombre de etiqueta especificado en el orden en que aparecen en el documento.
```bash
$ console.log(document.getElementsByTagName("h5"));
$ console.log(document.getElementsByTagName("h5")[0]);
```

`querySelector()` Devuelve el primer valor que coincida con el selector que se le da. Este método puede aceptar todos los selectores de estilo CSS, lo que le permite seleccionar por etiqueta, clase o ID.
```bash
$ console.log(document.querySelector("#query-selector"));
$ console.log(document.querySelector(".hipHop"));
$ console.log(document.querySelector("h5"));
$ console.log(document.querySelector("body"));
$ console.log(document.querySelector("#query-selector .hipHop .myLove"));
```

`querySelectorAll()` Funciona de forma similar a la anterior, que devuelve una colección de listas de nodos con todos los elementos coincidentes.
```bash
$ console.log(document.querySelectorAll(".wuTang"));
```

`createElement()` El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
```bash
const createElement = document.createElement("div");
console.log("createElemente tiene esta estructura: ");
console.log(createElement);
```

`createElement.innerHTML` Establecer algun texto mediante unos keys de innerHTML o innerTEXT
```bash
createElement.innerHTML = "JS es demasiado cool!";
createElement.innerText = "JS es demasiado cool";
console.log(createElement);
```


`appendChild()` Anexar elemento creado en js al doc de HTML
```bash
Version - un solo selector
let parentElement = document
  .querySelector("#parent")
  .appendChild(createElement);
Version - anidada
let parentElement2 = document
  .querySelector("#parent #firstchild")
  .appendChild(createElement);
```

`createElement.className` Añadir clase mediante JS
```bash
createElement.className = "ejemplo1";
```


## 17/11
Browser events
- Mouse events:
	- click
	- dblclick
	- mousemove
	- mouseover
	- mousewheel
	- mouseout
	- mousedown	
	- mouseup
- Touch Events:
	- touchstart
	- touchmove
	- touchend
	- touchcancel
- Keyboard Events: 
	- keydown
	- keypress
	- keyup
- Form Events: 
	- focus
	- blur
	- change
	- submit
- Window Events:
	- scroll
	- resize
	- hashchange
	- load
	- unload

## 18/11
Promesas. Async functions. Callbacks. Eventos.


### Promise
Una Promesa (`Promise`) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.
```bash
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);

```

### Async functions
La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction. Cuando se llama a una función async, esta devuelve un elemento `Promise`. Una función async puede contener una expresión `await`, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

Syntaxis
```bash
async function name([param[, param[, ... param]]]) {
   statements
}
```
`name` => El nombre de la función.

`param` => El nombre de un argumento que se debe pasar a la función.

`statements` => Las declaraciones que conforman el cuerpo de la función.

Ejemplo
```bash
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

### Callbacks
Explcicación de callbacks

### Events
Explicación de events.


## 21/11
Fetch API. HTTP. JSON. Laboratorio: 'Fetch me a dinner'. Métodos asociados.

### Principios Crud
```bash
C = Crear / create
Read/Get = leer / read
U = actualizar / update
D = borrar / delete
P = patch
```

### JSON
```bash
JSON === "Javascript Object Notation"
JSON es un formatode datos estandar basado en texto que se utiliza en el desarollo web para enviar y recibir datos.
JSON es el standard actual para crear aplicaciones tanto nativas como webApps, IOT === Internet of things, VideoJuegos ....
```

### Métodos Asociados

`RESPONSE.json()` The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

`JSON.parse()` Toma una cadena json y la convierte en un objeto javascript.

`Metodo FECTH!` La fetch API es una interfaz que permite realizar peticiones HTTP asíncronas a servidores desde los navegadores web y que utiliza Promise.


## Estructura de la carpeta
- Labs
	- CSS
	- HTML
		- Recipes Clone
		- Spotify Clone
	- JS
		- Basic Algorithms
		- Functions and Arrays
		- Greatest Movies
- Section 01 HTML
 	- Assets
 	- 01 - Basic Layout
 	- 02 - Meta Tags
	- 03 - Typography
	- 04 - Links
	- 05 - Images
	- 06 - List
	- 07 - Layout
	- 08 - Layout Example
	- 09 - Tables
	- 13 - Semantic Example
	- 14 - Forms
	- 15 - Forms Example
	- Layout Example CSS
	- Forms Example CSS

- Section 02 CSS
	- Assets
	- CSS
	- 01 - Basics
	- 02 - Selectors
	- 03 - Fonts
	- 04 - Text Properties
	- 05 - Colors
	- 06 - Borders Background
	- 07 - Box Model
	- 08 - Float Align
	- 09 - Links Buttons
	- 10 - Menu Styling
	- 11 - Position
	- 14 - Media Queries Extended
	- 15 - Media Query Example
	- 16 - Media Query Try
	- 17 - Grid Example
	- 18 - Grid Basic Example
	- 18 - Grid Basic Example 2
	- 19 - Grid Instagram
	- Index.html

- Section 03 JS
	- Projects
		- To-do List
		- User Input
	- 01 - JS Basics
	- 02 - JS Master
	- 03 - Intro
	- 04 - Data Types
	- 05 - Variables
	- 07 - Conditionals
	- 08 - Functions
	- 09 - Loops
	- 10 - Array Methods
	- 11 - DOM Manipulation
	- 12 - DOM Manipulation-2
	- 12 - DOM html
	- Index.js
