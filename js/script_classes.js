// 1. Create the class
class Book {
  // 2. Add constructor with title and author
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  // 3. Add describe() method
  describe() {
    console.log("This book is " + this.title + ` by ${this.author}`);
  }
}

// 4. Create an instance and call describe()

const myBook = new Book("1984", "George Orwell");

myBook.describe();

// Getters and setters

class Person {
  constructor() {
    this._name = ""; // private-like property by convention (with underscore)
    this._age = null;
  }

  // Getter: returns formatted name
  get name() {
    return "Name: " + this._name;
  }

  // Setter: trims whitespace and stores the name
  set name(value) {
    this._name = value.trim();
  }

  // Age Getter & Setter
  get age() {
    return this._age !== null ? "Age: " + this._age : "Age is not set";
  }

  set age(value) {
    if (typeof value !== "number" || value < 1 || value > 120) {
      console.log("Invalid age. Must be a number between 1 and 120.");
    } else {
      this._age = value;
    }
  }
}

// Testing

const p = new Person();
p.name = "  Alice  "; // setter runs here
console.log(p.name); // getter runs here → "Name: Alice"

p.age = 25;
console.log(p.age); // Age: 25

p.age = 200; // Invalid
console.log(p.age); // Age: 25 (unchanged)

// Examble for getter and setter

class User {
  constructor() {
    this._email = ""; // default: empty string (no email yet)
    this._password = ""; // default: empty string (no password yet)
    this._salary = 0; // default: 0 (or null if you prefer no value)
  }

  set email(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      this._email = value;
    } else {
      console.log("Invalid email format.");
    }
  }

  get email() {
    return this._email; // if you want to return the raw email only (like when saving it to a database)
  }

  set password(value) {
    if (typeof value === "string" && value.length >= 6) {
      this._password = value;
    } else {
      console.log("Password must be at least 6 characters long.");
    }
  }

  // return a string of * characters matching the length of the actual password to visually indicate its length without revealing it
  get password() {
    return "*".repeat(this._password.length);
  }

  // You should never expose the actual password directly through a getter or by printing it out—that’s a big security risk
  // Instead of getting the password, create a method to check if a given input matches the stored password.
  // No getter for actual password to avoid exposing it

  checkPassword(input) {
    return input === this._password;
  }

  set salary(value) {
    if (typeof value === "number" && value > 0) {
      this._salary = value;
    } else {
      console.log("Salary must be a positive number.");
    }
  }

  get salary() {
    return "Salary: $" + this._salary;
  }
}

const u = new User();
u.email = "invalid.email"; // ❌ Invalid
console.log(u.email); // Email is not set.

u.email = "user@example.com"; // ✅ Valid
console.log(u.email); // Email: user@example.com

u.password = "secret123";

console.log(u.password);
console.log(u.checkPassword("wrong")); // false
console.log(u.checkPassword("secret123")); // true

u.salary = 5000;
console.log(u.salary);

// Prototype

function Person1(name, age) {
  // assign name and age to this
  this.name = name;
  this.age = age;
}

// This attaches greet() to the prototype, so all instances of Person will share one copy of the method (efficient memory usage)
Person1.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
};

Person1.prototype.isAdult = function () {
  return this.age >= 18;
};

const newP = new Person1("Alice", 30);
newP.greet(); // Output: Hi, my name is Alice and I'm 30 years old.
console.log(newP.isAdult());

// 1. Create a prototype object (like a shared "blueprint")

// 2. Use Object.create() to make new objects linked to that prototype

// 3. Add properties to the instance and call methods from the prototype

const personPrototype = {
  greet: function () {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  },
  isAdult: function () {
    return this.age >= 18;
  },
};

// This object now inherits from personPrototype — it can use the greet() and isAdult() methods
const person1 = Object.create(personPrototype);
person1.name = "Luna";
person1.age = 21;

// Use it
person1.greet(); // Hi, my name is Luna and I'm 21 years old.
console.log(person1.isAdult()); // true

// Create another and use it
const person2 = Object.create(personPrototype);
person2.name = "Tom";
person2.age = 12;

person2.greet(); // Hi, my name is Tom and I'm 12 years old.
console.log(person2.isAdult()); // false

// Convert the personPrototype version into a JavaScript class
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  isAdult() {
    return this.age >= 18;
  }
}

const p1 = new Person2("George", 27);
p1.greet(); // Hi, my name is Luna and I'm 21 years old.
console.log(p1.isAdult()); // true
