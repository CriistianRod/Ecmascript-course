function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6 Default params
function newFunction2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);    
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');


let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ES6 Template literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = 'Lorem ipsum para separar la basura de mierda\n' +
            'Otra línea basura de mierda. Gas.';
console.log(lorem);

//ES6
let lorem2 = `Otra frase épica de mierda
Ahora es otra frase épica de mierda`;
console.log(lorem2);

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);


let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

{
    var globalVar = "Global Var"
}

{
    let globalLet = "Globar Let"
    console.log(globalLet)
}

console.log(globalVar)

const a = 'b'
console.log(a)
a = 'a'

//Objetos
let name = 'Oscar'
let age = 32

//JS
obj = {name: name, age: age}

//ES6
obj2 = {name, age}

console.log(obj)
console.log(obj2)

const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Chris', age: 23 }
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

// const listOfNames3 = (name, age, country) => {
//     ...
// }


// const listOfNames4 = name => {
//     ...
// }

const square = num => num**2
console.log(square(3))


//Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(1 === 2) resolve('All good!')
        else reject('Ups, something broke')
    })
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Holo'))
    .catch(error => console.log('F: ' + error))


class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}


//Modules
const calc = new Calculator()
console.log(calc.sum(2, 3))

const hello = require('./module')

console.log(hello())


//Generators
function* helloWorld() {
    if (true) yield 'Hello, '
    if (true) yield 'World'
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)


let numbers = [1, 2, 3, 7, 8]

if (numbers.includes(1)) console.log('1 is in!')
else console.log('F')


//Entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)


const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12,' ------'))
console.log('food'.padEnd(12, ' ------'))


//Async - Await
//Promesas
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}


const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
    try{
        const hello = await helloWorld()
        console.log(hello)
    }catch (error){
        console.log(error)
    }
}

anotherFunction()

//ES9
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
}

let { name, ...all } = obj
console.log(all)

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Done'))

const regexData = /([0-9]{4})-([0-9]{2}-([0-9]{2}))/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)