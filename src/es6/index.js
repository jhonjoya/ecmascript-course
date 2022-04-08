function newFunction(name,age,country) {
    var name = name || 'Jhon';
    var age = age || 34;
    var country = country || 'CO';

    console.log(name,age,country);
}

// ES6
function newFunction2(name="Edicson", age=33, country='PE') {
    console.log(name,age,country);
}

newFunction2();
newFunction2('Peter',24,'EU');

/* Aquí termina */

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

//ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);
/* Aquí termina */

let lorem = "Soy una frase épica de otra época \n"
+ "Otra Frase Epica que no pica";
/* Aquí termina */

//ES6
let lorem2 = `Otra forma de probar que
realmente esto funciona`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
};

console.log(person.name, person.age, person.country);

//ES6
let {name,age,country} = person;
 
console.log(name,age,country);
/* Aquí termina */

let team1 = ['Oscar','Julian','Ricarddo'];
let team2 = ['Valeria','Jesica','Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global var";
}

{
    let globalLet = "Global let";
    console.log(globalLet);

}

console.log(globalVar);

/* Otro ejemplo */
const a = 'b';
a = 'a'; // Error, porque no se puede cambiar el valor de una constante

/* Otro ejemplo */

let name1 = 'Oscar';
let age2 = 32;
// ES5
obj = {name: name1, age: age2};
// ES6
obj2 = {name1,age2};

console.log(obj2);

/* Otro ejemplo */

const names = [
    {name: 'Oscar', age: 32},
    {name: 'Jesica', age: 27},
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfNames2 = names.map((item)=>{
    console.log(item.name);
});

let listOfNames3 = names.map(item => console.log(item.name));

const listOfNames4 = (name,age,country) => {
    //Bloque de cógido aquí
};

const listOfNames5 = name => {
    //Bloque de código aquí
};

const square = num => num * num;


// Promises -> Async functions

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ops!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log("Se pueden agregar muchos then"))
    .catch(error => console.log(error));


class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(5,6));

const hello = require('./module')
console.log(hello());


function* helloworld() {
    if(true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloworld();

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)