// let age = prompt("Enter your age: ");

// if (age <= 5) {
//     console.log("Entrada gratis!");
// }else if (age < 15) {
//     console.log("Tienes un 20% de descuento!");
// } else if (age >= 15 && age <= 60) {
//     console.log("Precio regular");
// } else if (age > 60) {
//     console.log("Tienes un 40% de descuento!");
// }


// Ejemplo complejo - SWITCH - COUNTRY CONTINET FINDER - CASOS MULTIPLES
const countryOfOrigin = prompt("What country where you born?");
switch (countryOfOrigin.toLowerCase()) {
  case "venezuela":
  case "colombia":
  case "ecuador":
  case "brazil":
    alert(`Cool, ${countryOfOrigin} is located in South America`);
    console.log(`Cool, ${countryOfOrigin} is located in South America`);
    break;
  case "spain":
  case "france":
  case "portugal":
  case "andorra":
    alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
    console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
    break;
  default:
    alert("you are not from this planet! go Invade somewhere else...");
    console.log("you are not from this planet! go Invade somewhere else...");
} 