//-------- const/destructuring ---------------
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ ,randomCar ] = cars
const [ ,,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

const employee = {
    firstName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { firstName: otherName } = employee;
//Predict the output
console.log(employee[0]);
console.log(otherName);

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,cookie] = numbers;
const [,,,monster] = numbers;
const [,,,,,,,,eats] = numbers;
//Predict the output
console.log(cookie == monster);
console.log(cookie == eats);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//-------- destructuring/Rest/Spread ---------------
const person1 = {
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

const { firstName, lastName, ...attributes } = person1;
const personCopy = { ...person1 };
console.log(personCopy === person1)
// => false
console.log(personCopy.addresses === person1.addresses)
// => true
//-------- Arrow Functions ---------------
var greeting = function(name) {
    console.log('Hello ' + name);
};
greeting("Cameron")

const greeting2 = (name) => {
    console.log(`Hello ${name}`);
};
greeting2("Smith")

const sayHello = name => console.log(`Hello ${name}`);
sayHello("David")

var square1 = function(n) {
    return n * n;
};
console.log(square1(3))
const square = n => n * n;
console.log(square(2))

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
        return {
            firstName: 'John',
            lastName: 'Wick'
        }
    }
    /**
      * The example below wouldn't work because the
      * brackets are interpreted as opening the body of the
      * function rather than brackets to create an object literal
      */
    //**** const returnObj = () => { firstName: 'John', lastName: 'Wick' }
    // surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
const {object} = returnObjFixed;
console.log(returnObjFixed(object));

//Arrow functions inherit context from the parent scope. To demonstrate this let's create a card Deck class. We'll start refactoring for a more functional approach using forEach, but continue using traditional anonymous functions.
// Creating a new Deck this way will now result in a TypeError: TypeError: Cannot read property 'createCard' of undefined, because this in our anonymous functions don't have the same context as our loops.
class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(function(suit) {
            faces.forEach(function(face) {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}
//Arrow functions don't create their own context, it looks to the enclosing scope for that information. Therefore this should now refer to the DeckAaArrowF instance, which has a createCard method
class DeckAaArrowF {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }

}
