// ............Map method...............

// Exercise 1: Double the Numbers
// Task:
// Given an array of numbers, create a new array where each number is doubled.

// const numbers = [65, 44, 12, 4];

// const doubled = numbers.map((num) => num * 2);

// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 2;
// }

// Exercise 2: Capitalize Words
// Task:
// Given an array of lowercase strings, return a new array with the first letter capitalized in each word.

// const someStrings = ["one", "two", "three", "four"];

// const capitalized = words.map(word => word[0].toUpperCase() + word.slice(1));

// Exercise 3: Extract Property from Objects
// Task:
// Given an array of user objects, return a new array of just their names.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];

// const names = users.map((user) => user.name);

// ............Filter method...............

// Exercise 2: Filter Short Words
// Task:
// Given an array of strings, return only the words that are shorter than 5 characters.

const words = ["tree", "mountain", "cat", "house", "sun"];

shortWords = words.filter((word) => word.length < 5);

// Exercise 3: Filter Adults
// Task:
// Given an array of people objects, return only those who are 18 or older.

const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 22 },
  { name: "Jack", age: 18 },
  { name: "Jill", age: 15 },
];

const adults = people.filter(function (person) {
  return person.age >= 18;
});

// ...........Reduce method...............

const numbers = [1, 2, 2, 4];

const product = numbers.reduce((acc, cur) => acc * cur); // product of the array items

// Given an array of shopping cart items (each with name and price), use .reduce() to calculate the total price.

const cart = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 2 },
  { name: "Notebook", price: 5 },
];

const totalPrice = cart.reduce((acc, cur) => acc + cur.price, cart[0].price);

// Total number of characters (letters) in all the words combined

numOfChar = words.reduce((acc, cur) => acc + cur.length, 0);

// How many times the number 3 appears

const numbers1 = [1, 3, 5, 3, 7, 3, 1];

const arrOfThree = numbers1.filter((item) => item === 3); // returns [3, 3, 3] and you can find the length of it

numOfTimes = numbers1.reduce(function (acc, cur) {
  if (cur === 3) {
    acc += 1;
  }
  return acc;
}, 0);

const numOfTimes1 = numbers1.reduce(
  (acc, cur) => (cur === 3 ? acc + 1 : acc),
  0
); // another way

// Group Words by First Letter

const words1 = ["apple", "banana", "apricot", "blueberry", "cherry"];

const grouped = words1.reduce(function (acc, word) {
  const firstLetter = word[0]; // Step 1: get the first letter

  if (!acc[firstLetter]) {
    // Step 2: if we don't have this letter in our object yet,
    acc[firstLetter] = []; // create an empty array for it
  }

  acc[firstLetter].push(word); // Step 3: put the word in the right group

  return acc; // Step 4: return the updated object for the next word
}, {});

// Count Total Items in Nested Arrays

const groups = [[1, 2], [3, 4, 5], [6]];

totalItemsNum = 0;

for (let i = 0; i < groups.length; i++) {
  for (let j = 0; j < groups[i].length; j++) {
    totalItemsNum += 1;
  }
} // resolving without reduce

const totalItemsNum1 = groups.reduce((acc, cur) => acc + cur.length, 0);

// Given an array of strings, return an object showing how many times each word appears

const words2 = ["apple", "banana", "apple", "cherry", "banana", "apple"];

function timesWord(someWord, wordsArr) {
  return wordsArr.reduce((acc, cur) => (cur === someWord ? acc + 1 : acc), 0);
}

let wordCounts = {};

for (let i = 0; i < words2.length; i++) {
  wordCounts[words2[i]] = timesWord(words2[i], words2);
}

/* Expected result:
{
  apple: 3,
  banana: 2,
  cherry: 1
}
*/

// Frequency Counter with .reduce(), another solution:

const wordCounts1 = words2.reduce(function (acc, word) {
  if (acc[word]) {
    acc[word] += 1;
  } else {
    acc[word] = 1;
  }
  return acc;
}, {});

// 💡 Optional shorter version with ternary:

const wordCounts3 = words.reduce((acc, word) => {
  acc[word] = acc[word] ? acc[word] + 1 : 1;
  return acc;
}, {});

// Using .reduce(), flatten a 2D array into a single array (no .flat() allowed 😄)

const nested = [[1, 2], [3, 4], [5]];

const flattened = nested.reduce((acc, cur) => {
  for (let i = 0; i < cur.length; i++) {
    acc.push(cur[i]);
  }
  return acc;
}, []);

const flattened1 = nested.reduce((acc, cur) => acc.concat(cur), []); // another solution

// Expected result: [1, 2, 3, 4, 5]

console.log(flattened);
