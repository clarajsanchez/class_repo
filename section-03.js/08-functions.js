// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

// let livesIn = {
//     livesInCity: false,
//     livesInTown: true,
// }

function ej1(name, age, livesIn) {
    return true;
}

let ej2 = (name, age, livesIn) => {
    if (livesIn.livesInCity) return `${name} tiene ${age} años y vive en la ciudad`;
    else if (livesIn.livesInTown) return `${name} tiene ${age} años y vive en el pueblo`;
}

console.log(ej2("Jarko", 25, {livesInCity: true, livesInTown: false}));
console.log(ej2("Martina", 42, {livesInCity: false, livesInTown: true}));
console.log(ej2("Laia", 78, { livesInCity: false, livesInTown: true }));