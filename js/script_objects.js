// 001 Creating an object

function createPerson(name, age, city) {
  const person = {
    name: name,
    age: age,
    city: city,
  };
  return person;
}

// The way with arrow function

const createPerson1 = (name, age, city) => ({ name, age, city });

// Notice the ({ ... }) — parentheses are needed so JavaScript doesn’t confuse the {} with a function body.

console.log(createPerson("Oksana", 39, "Kyiv"));

// 002 Access property

function getName(person) {
  return person.name;
}

// shorter version

const getName1 = (person) => person.name;

let me = createPerson("Oksana", 39, "Kyiv");

console.log("My name is", getName(me));

// 003 Add property

function addCountry(person, country) {
  person.country = country;
  return person;
}

// 004 Update property

function updateAge(person, newAge) {
  person.age = newAge;
  return person;
}

// Alternative (non-mutating version — keeps the original object unchanged):

function updateAge1(person, newAge) {
  return { ...person, age: newAge };
}

// 005 Delete property

function removeCity(person) {
  delete person.city;
  return person;
}

// Alternative (non-mutating version):

function removeCity(person) {
  const { city, ...rest } = person; // object destructuring
  return rest;
}

// 006 Count Properties

function countProperties(obj) {
  return Object.keys(obj).length;
}

// Methods keys, values, entries

let car = { brand: "Toyota", year: 2020, color: "blue" };

console.log("Keys:", Object.keys(car)); // ['brand', 'year', 'color']
console.log("Values:", Object.values(car)); // ['Toyota', 2020, 'blue']
console.log("Entries:", Object.entries(car)); // [['brand', 'Toyota'], ['year', 2020], ['color', 'blue']]

// 007 Invert object

function invertObject(obj) {
  let invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}

console.log("Inverted obj:", invertObject({ a: 1, b: 2, c: 3 })); // {1: 'a', 2: 'b', 3: 'c'}

// A safe version that handles duplicate values by storing all keys with the same value in an array:

function invertObjectSafe(obj) {
  const inverted = {};
  for (const [key, value] of Object.entries(obj)) {
    if (inverted[value]) {
      inverted[value].push(key);
    } else {
      inverted[value] = [key];
    }
  }
  return inverted;
}

console.log(invertObjectSafe({ a: 1, b: 1, c: 2 })); // { "1": ["a", "b"], "2": ["c"] }
