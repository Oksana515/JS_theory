// splice

// 001 Remove an item

let fruits = ["apple", "banana", "cherry", "orange"];

// array.splice(2, 3) видалить 3 елементи починаючи з індексу 2

function removeAnItem(index) {
  if (index < 0 || index >= fruits.length) {
    return "Invalid index";
  }
  fruits.splice(index, 1);
  return fruits;
}

console.log(removeAnItem(1)); // ['apple', 'cherry', 'orange']

// 002 Insert an item

let colors = ["red", "blue", "yellow"];

function insertAnItem(index, item) {
  if (index < 0 || index > colors.length) {
    // Notice: `>` instead of `>=` so you can insert at the end
    return "Invalid index";
  }
  colors.splice(index, 0, item);
  return colors;
}

console.log(insertAnItem(1, "green"));
// ["red", "green", "blue", "yellow"]

console.log(insertAnItem(3, "purple"));
// ["red", "green", "blue", "purple", "yellow"]

// 003 Replace an item

let animals = ["cat", "dog", "rabbit"];

function replaceAnItem(index, item) {
  animals.splice(index, 1, item);
  return animals;
}

console.log(replaceAnItem(1, "tiger")); // ['cat', 'tiger', 'rabbit']

// 004 Remove multiple items

let nums = [1, 2, 3, 4, 5, 6];

function removeMultipleItems(arr, index, items_num) {
  // safety check to avoid weird indexes
  if (index < 0 || index >= arr.length) {
    return "Invalid index";
  }
  arr.splice(index, items_num);
  return arr;
}

console.log(removeMultipleItems(nums, 1, 3)); // [1, 5, 6]

// 005 Extract last two items

let letters = ["a", "b", "c", "d", "e"];

function extractLastTwoItems(arr) {
  return arr.splice(arr.length - 2, 2);
}

console.log(extractLastTwoItems(letters)); // ['d', 'e']

// 006 Clear an array

let tasks = ["study", "code", "eat", "sleep"];

function clearAnArray(arr) {
  arr.splice(0, arr.length);
  return arr;
}

console.log("Clear the array: ", clearAnArray(tasks));
