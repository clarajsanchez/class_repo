console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Driver";
let hacker2 = "Navigator";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let l1 = hacker1.length;
let l2 = hacker2.length;
if (l1 > l2) {
    console.log(`The driver has the longest name, it has ${l1} characters.`);
} else if (l1 < l2) {
    console.log(`It seems that the navigator has the longest name, it has ${l2} characters.`);
} else if (l1 === l2) {
    console.log(`Wow, you both have equally long names, ${l1} characters!`);
}


// Iteration 3: Loops
// 3.1
let i = 0;
let arr = [];
while (i < l1) {
    arr.push(" ");
    arr[i] = (hacker1[i].toUpperCase());
    i++;
}
console.log(arr.join(" "));

// 3.2
let j = l2;
let x = 0;
let array = [];
while (j > 0) {
    array.push(" ");
    array[x] = (hacker2[j - 1]);
    j--;
    x++;
}
console.log(array.join(" "));

// 3.3
const compare = hacker1.localeCompare(hacker2);
if (compare === -1) {
    console.log("The driver's name goes first.");
}
else if (compare === 1) {
    console.log("Yo, the navigator goes first definitely.")
 }
else if (compare === 0) {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim magna. Phasellus nec mollis nunc. Aliquam porta dignissim felis, sed fringilla diam vehicula eget. Nam sit amet tempor diam, vitae blandit magna. Suspendisse quam mauris, auctor ut ex vel, venenatis iaculis enim. Maecenas non pretium ex. In tortor justo, luctus eget velit eget, ultrices consectetur purus. Ut condimentum, quam in molestie suscipit, leo purus vehicula ante, quis ultrices ante ipsum tristique sapien. Ut luctus odio sit amet ipsum cursus faucibus. Vivamus fringilla nisl nunc. Cras id massa ac est aliquam suscipit. Nam vitae volutpat magna, eu ornare mi. Curabitur sit amet accumsan massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur aliquet, dolor quis bibendum tincidunt, dolor ipsum elementum lacus, nec malesuada metus leo at diam. Vestibulum bibendum fringilla felis, vitae tincidunt libero tristique vel. Curabitur sed tortor sed est gravida elementum. Etiam posuere eros nec quam dignissim accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ullamcorper tellus a diam dapibus tincidunt. Cras lobortis risus sed hendrerit rhoncus. Fusce id maximus elit. Donec ornare, dolor vitae varius sagittis, urna erat ultrices tortor, at aliquet lorem ante at augue. Fusce purus lacus, vehicula vel iaculis quis, imperdiet non lectus. Nulla maximus justo nec elit viverra, eu faucibus lorem pharetra. In non dignissim dolor. Pellentesque neque turpis, dictum ut nunc vel, efficitur ultrices nibh. Praesent at risus non urna venenatis bibendum. Vivamus hendrerit magna nisi, sit amet aliquam magna pellentesque sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet urna ac lacus vulputate facilisis.";

let counter = 1;
let etCounter = 0;
for (let i = 0; i < lorem.length; i++){
    if (lorem[i] === " ") {
        counter++;
    }
    if (lorem[i] === " " && lorem[i+1] === "e" && lorem[i+2] ==="t" && lorem[i+3] === " ") {
        etCounter++;
    } 
}
console.log(`Counter: ${counter}, et counter: ${etCounter}`);