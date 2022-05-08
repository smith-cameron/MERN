'use strict';
// Destructuring -----------------------------------------
const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const { email } = person1;
const [firstAnimal] = animals;
// console.log(email);

// console.log(firstAnimal);

// // old way:
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// Destructured way:
const { email1, password } = person1;
const [animal1, animal2, thirdAnimal] = animals;

const pass = '12345';
const { password: hashedPassword } = person1;
// console.log(hashedPassword)

// Nested Destructuring ---------------------------------------
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

const { addresses: [ , { city: london }] } = person;
const { addresses: [whiteHouse, sherlock] } = person;
// console.log(whiteHouse)
// console.log(sherlock)
// console.log(london)

const allAnimals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [Animal1, Animal2] = animals;

const [x,y, ...z] = animals
// console.log(z)

const animalCopy = [...animals]
// console.log(animalCopy)

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = values.filter( val => val % 2 !== 0 );
// console.log(evens)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
// console.log(oFoods)

const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes)