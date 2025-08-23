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

// 008 Write a function wordFrequency(str) that counts how many times each word appears in a string and returns an object

function wordFrequency(str) {
  let frequency = {};
  const words = str.split(" ");

  for (let word of words) {
    if (frequency[word]) {
      frequency[word]++; // increase count if word already exists
    } else {
      frequency[word] = 1; // otherwise, start at 1
    }
  }

  return frequency;
}

console.log(
  "Frequency object:",
  wordFrequency("apple orange apple banana orange apple")
); // { apple: 3, orange: 2, banana: 1 }

// How to make wordFrequency function ignore punctuation and case sensitivity:

function wordFrequency1(str) {
  let frequency = {};

  // 1. Lowercase everything
  str = str.toLowerCase();

  // 2. Remove punctuation (keep only letters, numbers, spaces)
  str = str.replace(/[^\w\s]/g, "");

  // 3. Split into words
  const words = str.split(/\s+/); // split by one or more spaces

  // 4. Count occurrences
  for (let word of words) {
    if (word) {
      // ignore empty strings
      frequency[word] = (frequency[word] || 0) + 1;
    }
  }

  return frequency;
}

console.log(wordFrequency1("Hello, hello! World... world? WORLD"));
// { hello: 2, world: 3 }

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    if (records[id].hasOwnProperty(prop)) {
      records[id][prop].push(value);
    } else {
      records[id][prop] = [];
      records[id][prop].push(value);
    }
  } else {
    records[id][prop] = value;
  }

  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection);

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let obj of contacts) {
    if (obj.firstName === name) {
      if (obj.hasOwnProperty(prop)) {
        return obj[prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log("Kristian:", lookUpProfile("Kristian", "lastName"));
console.log("Sherlock:", lookUpProfile("Sherlock", "likes"));
