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
