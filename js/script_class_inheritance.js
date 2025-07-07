// Inheritance

// 1. Create Animal class
class Animal {
  // constructor(name)
  constructor(name) {
    this.name = name;
  }
  // speak() method
  speak() {
    console.log(`The animal ${this.name} makes a sound.`);
  }
}

// 2. Create Dog class that extends Animal and overrides the speak() method
class Dog extends Animal {
  // Override speak()
  speak() {
    console.log(`The dog ${this.name} barks.`);
  }
}

// 3. Create instance and call speak()
const myDog = new Dog("Rex");
myDog.speak();

// 2. Create Cat class that extends Animal and overrides the speak() method
class Cat extends Animal {
  speak() {
    console.log(`The cat ${this.name} meows.`);
  }
}

const myCat = new Cat("Peach");
myCat.speak();

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`Starting the ${this.brand} vehicle...`);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super(brand); // call the parent constructor (required!)
    this.wheels = 4;
  }
  start() {
    console.log(
      `Vroom! The ${this.brand} car with ${this.wheels} wheels is ready.`
    );
  }
}

class Bike extends Vehicle {
  constructor(brand, type) {
    super(brand);
    this.type = type;
  }
  start() {
    console.log(`Pedaling the ${this.type} bike made by ${this.brand}...`);
  }
}

const firstCar = new Car("Honda");
firstCar.start();

const firstBike = new Bike("Scott", "mountain");
firstBike.start();
