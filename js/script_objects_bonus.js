// 001 Checking if object is empty

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// 002 Write a function countByValue(arr, prop) that takes an array of objects and a property name.
// It should return an object showing how many times each value appears.

function countByValue(arr, prop) {
  let resultingObj = {};
  for (let object of arr) {
    let key = object[prop];
    if (resultingObj.hasOwnProperty(key)) {
      resultingObj[key]++; // increase count
    } else {
      resultingObj[key] = 1; // first occurrence
    }
  }
  return resultingObj;
}

const pets = [
  { type: "dog", name: "Rex" },
  { type: "cat", name: "Milo" },
  { type: "dog", name: "Buddy" },
];

console.log("Count by value:", countByValue(pets, "type")); // { dog: 2, cat: 1 }

// 003 Find the oldest person

const people = [
  { name: "Anna", age: 25 },
  { name: "John", age: 42 },
  { name: "Maria", age: 36 },
];

function findOldest(people) {
  let oldest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldest.age) {
      oldest = people[i];
    }
  }
  return oldest;
}

console.log("The oldest person's object:", findOldest(people));

// 004 Object Equality
// Write a function that returns true if both objects have the same keys and values (shallow comparison)

function isEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

// 005 Group by Property
// Given an array of objects, group them by a property

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

function groupBy(array, prop) {
  return array.reduce((groups, item) => {
    const key = item[prop]; // e.g., "A" or "B"

    // If group doesn't exist yet, create an empty array
    if (!groups[key]) {
      groups[key] = [];
    }

    // Push the current item into the right group
    groups[key].push(item);

    return groups; // Pass updated groups to next iteration
  }, {}); // Start with empty object
}

groupBy(students, "grade");

/* {
   A: [ { name: "Alice", grade: "A" }, { name: "Charlie", grade: "A" } ],
   B: [ { name: "Bob", grade: "B" } ]
} */

//  Grouping means organizing items in an array based on a shared property and returning them inside an object where each key represents a group.

//  Example Without Grouping

//  const students = [
//    { name: "Alice", grade: "A" },
//    { name: "Bob", grade: "B" },
//    { name: "Charlie", grade: "A" },
//  ];

//  This is just a list. You have to search through the whole array to find all students with grade "A".

//  Example With Grouping

//  {
//    A: [
//      { name: "Alice", grade: "A" },
//      { name: "Charlie", grade: "A" }
//    ],
//    B: [
//      { name: "Bob", grade: "B" }
//    ]
//  }

//  Now, if you want all students with grade "A", you can simply access:

//  groups["A"];

//  Core Idea

//  1. Loop through array.

//  2. Check if the group key already exists.

//  3. If not, create an empty array for it.

//  4. Push the current item into that group.

//  Here’s a step-by-step example of grouping using reduce():

//  🔍 Step-by-Step Explanation
//  First iteration (Alice):

//  groups = {}

//  key = "A"

//  groups["A"] = [] → then push Alice → groups = { A: [Alice] }

//  Second iteration (Bob):

//  key = "B"

//  groups["B"] = [] → push Bob → groups = { A: [Alice], B: [Bob] }

//  Third iteration (Charlie):

//  key = "A"

//  Already exists → push Charlie → groups = { A: [Alice, Charlie], B: [Bob] }

// Sorting

function sortAnArrayBubble(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let buffer = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buffer;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

function sortAnArray(array) {
  return array.sort((a, b) => a - b);
}

console.log("Sorted:", sortAnArray([4, 3, 2, 5, 1, 7, 6]));

// Recursion

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1); // [1, 2, ... n - 1]
    countArray.push(n);
    return countArray;
  }
}
console.log("Countup", countup(5));

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1); // [n - 1 .... 3, 2, 1]
    countArray.unshift(n);
    return countArray;
  }
}

console.log("Countdown:", countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
