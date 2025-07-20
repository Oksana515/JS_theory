function logAll(...args) {
  console.log(args); // logs an array of all arguments passed
}

logAll(1, 2, 3); // [1, 2, 3]

// Sum

function sumAll(...args) {
  let sum = 0;
  for (let element of args) {
    sum += Number(element);
  }
  return sum;
}

// Another way to sum

function sumAll1(...args) {
  return args.reduce((acc, val) => acc + Number(val), 0);
}

console.log(sumAll1(1, 2, 3, 4)); // 10

// Find the maximum

function maxOfAll(...args) {
  // your code
  maxEl = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] > maxEl) {
      maxEl = args[i];
    }
  }
  return maxEl;
}

// Another way to max

const maximumOfAll = (...args) => Math.max(...args);

console.log(maxOfAll(5, 9, 34, 1, 20)); // 20

// Only strings

function onlyStrings(...args) {
  // your code
  let strArr = [];
  for (let element of args) {
    if (typeof element === "string") {
      strArr.push(element);
    }
  }
  return strArr;
}

console.log(onlyStrings(1, "hello", true, "world")); // ["hello", "world"]

// Another way to strings only

const onlyStr = (...args) => args.filter((arg) => typeof arg === "string");

// Function, that prints each message prefixed with a tag

function taggedLog(tag, ...messages) {
  // your code
  for (let element of messages) {
    console.log(tag + " " + element);
  }
}

taggedLog("[INFO]", "Server started", "Listening on port 3000");
// Output:
// [INFO] Server started
// [INFO] Listening on port 3000

// Multiply

function multiplyAll(factor, ...nums) {
  // your code
  let multiArr = [];
  for (let element of nums) {
    multiArr.push(element * factor);
  }
  return multiArr;
}

console.log(multiplyAll(2, 1, 2, 3)); // [2, 4, 6]

// Cleaner version

const multiplyAllElems = (factor, ...nums) => nums.map((n) => n * factor);

// Another way to multiply

const multiplyAllElements = (factor, ...args) => {
  return args.map((num) => num * factor);
};
