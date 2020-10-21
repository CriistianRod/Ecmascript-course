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

