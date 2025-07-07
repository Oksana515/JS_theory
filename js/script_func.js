// Create an object person with a name property and a sayHello method that logs "Hello, my name is [name]" using this.name

const person = {
  name: "Alice",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.sayHello(); // Expected: Hello, my name is Alice

const user = {
  name: "Bob",
  greet: function () {
    setTimeout(() => console.log("Hi, I'm " + this.name), 1000);
  },
};

user.greet();

// Callback function

function processUser(callback) {
  const name = "Alice";
  callback(name);
}

function greet(name) {
  console.log("Hello, " + name + "!");
}

processUser(greet); // Should print: Hello, Alice!

// Create a constructor function Car that assigns a brand to this, and has a method drive() that logs "Driving a [brand]"

// Your Task:
function Car(brand) {
  // assign brand to this
  this.brand = brand;
  // define drive() method inside the constructor
  this.drive = function () {
    console.log("Driving a " + this.brand);
  };
}

const myCar = new Car("Toyota");
myCar.drive(); // Expected: Driving a Toyota

// Using Prototype

function Car1(brand) {
  this.brand = brand; // Assign brand to the instance
}

// Define drive() once on the prototype
Car1.prototype.drive1 = function () {
  console.log("Driving a " + this.brand);
};

const myCar1 = new Car1("Honda");
myCar1.drive1(); // Driving a Honda

/* Why use prototype?

Methods defined inside the constructor get created new every time you create an object.

Methods on the prototype are shared by all instances — saves memory and is more efficient. */
