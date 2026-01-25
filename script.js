"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("Jonas", 1991);

// console.log(jonas);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Person.prototype.species = "Homo Sapiens";

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// console.log(Person.prototype);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// const arr = [1, 2, 3];

// console.log(arr);
// console.log(arr.__proto__.__proto__);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   // console.log((this.speed += 10));
//   console.log(`${(this.speed += 10)}km/h`);
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("MERCEDES", 95);

// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();

// console.log(bmw);
// console.log(mercedes);

///////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.firstName = fullName;
//     this.birthYear = birthYear;
//   }
//   // methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(" ")) this.fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
// }

// const jessica = new PersonCl("Jessica", 1996);

// console.log(jessica);

// jessica.calcAge();

// console.log(jessica.age);

// jessica.fullName = "Jessica Brown";

// console.log(jessica.__proto__ === PersonCl.prototype);

/////////////////////////////////

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Brown", 1000);

console.log(jessica);

console.log(jessica.fullName);

/////////////////////////////////////

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  set speed(spd) {
    if (spd >= 0) this._speed = spd;
    else console.log(`Invalid speed`);
  }

  get speed() {
    return this._speed;
  }
}

const bmw = new CarCl("BMW", 250);

// bmw.speed = 100;

console.log(bmw);

console.log(bmw.speed);
