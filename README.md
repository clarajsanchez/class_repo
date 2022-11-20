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


### Estructura de la carpeta
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
