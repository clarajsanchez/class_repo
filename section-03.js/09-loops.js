// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.

let arr = ["a", 2, {
    name: "Clara",
    surname: "Jiménez"
}];
for (let i = 0; i < arr.length; i++){
    console.log(typeof arr[i]);
}


// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

let array = ["Taylor Swift", "Rafa Nadal", "Bad Bunny"];
for (let i = 0; i < array.length; i++) { 
    console.log(`${array[i]} is so famous, I love them.`);
}