function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
    },
    decrement: function () {
      // YOUR CODE HERE
      count--;
      console.log(count);
    },
  };
}

const c = createCounter();

c.increment(); // count = 1 → logs 1
c.increment(); // count = 2 → logs 2
c.reset(); // count is reset to 0
c.increment(); // count = 1 again → logs 1
c.decrement(); // count = 0 again → logs 0

// Why is count private?
// Because it's only accessible inside increment and reset. Outside code can’t touch it directly:
// console.log(c.count); undefined

function makeMultiplier(x) {
  return function (y) {
    // ???
    return x * y;
  };
}

// const double = makeMultiplier(2);
// console.log(double(5)); // 10
// console.log(double(10)); // 20

// Why is this powerful?
// You can make many multipliers, and each "remembers" its own x:

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(4)); // 8
// console.log(triple(4)); // 12

function makeTrackedMultiplier(x) {
  let count = 0;

  return function (y) {
    count++;
    const result = x * y;
    console.log(result + " (used " + count + " times)");
    return result;
  };
}

const double = makeTrackedMultiplier(2);

double(5); // 10 (used 1 times)
double(3); // 6 (used 2 times)
double(7); // 14 (used 3 times)

// Write a function greetUser(name) that returns a new function. That function, when called, should greet the user by their name:

function greetUser(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}

const greetOksana = greetUser("Oksana");
greetOksana(); // Hello, Oksana!

// This function returns another function (a closure).

// When you call greetUser("Alice"), it doesn’t print anything immediately.

// Instead, it returns a function that, when called later, will print "Hello, Alice!".

// This lets you save the greeting function and call it later.

// Example:

// const greetAlice = greetUser("Alice"); // no output yet
// greetAlice(); // prints: Hello, Alice!

// Secret Holder. Write makeSecret(secret) that returns two functions: one to get the secret and one to set a new one.

function makeSecret(secret) {
  return {
    set: function (newSecret) {
      secret = newSecret;
    },
    get: function () {
      console.log(secret);
    },
  };
}

let secret = makeSecret("I love JS");

secret.get(); // "I love JS"
secret.set("I love Python");
secret.get(); // "I love Python"

// Limit Function Call. Write a function limit(fn, maxCalls) that returns a version of fn that can only be called maxCalls times:

function limit(fn, maxCalls) {
  let calls = 0; // to keep track of calls made

  return function (...args) {
    if (calls < maxCalls) {
      calls++;
      return fn(...args); // call the original function with all arguments
    } else {
      // limit reached — do nothing or return undefined
      console.log("Function call limit reached");
      return undefined;
    }
  };
}

const sayHi = () => console.log("Hi!");
const limitedSayHi = limit(sayHi, 2);

limitedSayHi(); // Hi!
limitedSayHi(); // Hi!
limitedSayHi(); // (nothing happens)
