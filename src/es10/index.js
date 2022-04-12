let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2)); // evalua la profundidad del arreglo

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = '              Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'Hello World           ';
console.log(hello2);
console.log(hello2.trimEnd());

/* Entries */

let entries = [['name','oscar'],['age',32],['country','MX']];
console.log(Object.fromEntries(entries));

/* Symbols */

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)