// console.log(8);

// console.log("Helloooo");
// console.log('Helloooo');







// console.table(["Taylor Swift", "Harry Styles", "Bad Bunny", "Daddy Yankee", "Conan Gray"]);

const myBio = {
    firstName: "Clara",
    lastName: "Jiménez",
    citiesILivedIn: ["Barcelona", "Salamanca"],
    age: 24,
    dob: "12/08/1998",
    drinkAlcohol: true
};

const books = [
    {
        bookName: "El código Da Vinci",
        genre: ["mistery", "fiction"],
        author: "Dan Brown",
        year: 2003,
        ISBN: "9788408175728"
    },
    {
        bookName: "Harry Potter y la piedra filosofal",
        genre: ["fantasy", "adventure"],
        author: "J. K. Rowling",
        year: 1997,
        ISBN: "9788418173004"
    },
    {
        bookName: "The Lion, the Witch and the Wardrobe",
        genre: ["fantasy", "adventure"],
        author: "C. S. Lewis",
        year: 1950,
        ISBN: "978-84-08-05703-1"
    }
];

console.log(`Drinks Alcohol: ${myBio.drinkAlcohol}`);
console.log(`My favorite book is: ${books[1].bookName}`);