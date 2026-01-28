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

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;

// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl("Jessica Brown", 1000);

// console.log(jessica);

// console.log(jessica.fullName);

// /////////////////////////////////////

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   set speed(spd) {
//     if (spd >= 0) this._speed = spd;
//     else console.log(`Invalid speed`);
//   }

//   get speed() {
//     return this._speed;
//   }
// }

// const bmw = new CarCl("BMW", 250);

// // bmw.speed = 100;

// console.log(bmw);

// console.log(bmw.speed);

//////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// steven.name = "Steven";
// steven.birthYear = 1988;
// steven.calcAge();

// console.log(steven);

/////////////////////////////////////

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   // methods
//   accelerate() {
//     console.log(`${(this.speed += 10)}km/h`);
//   }

//   brake() {
//     console.log(`${(this.speed -= 5)}km/h`);
//   }

//   // set and get

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(value) {
//     this.speed = value * 1.6;
//   }
// }

// const ford = new Car("Ford", 120);

// console.log(ford);

// ford.accelerate();
// ford.brake();

// console.log(ford.speedUS);

// ford.speedUS = 50;

// console.log(ford.speedUS);

// console.log(ford);

/////////////////////////////////////////////

// inheritance between classes

// person constructor
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // student constructor
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");

// console.log(mike);
// mike.introduce();
// mike.calcAge();

//////////////////////////////////////////////////

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// // electric car

// function EV(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
// EV.prototype.chargeBattery = function (chargeTo) {
//   if (chargeTo <= 100 && chargeTo >= 0) {
//     this.charge = chargeTo;
//   } else {
//     console.log("Invalid charge value!");
//   }
// };
// EV.prototype.accelerate = function () {
//   if (this.charge <= 6) {
//     console.log(`Battery too low (${this.charge}%)`);
//     return;
//   }

//   this.speed += 20;
//   this.charge -= 1;

//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);

// console.log(tesla);

// tesla.chargeBattery(7);

// console.log(tesla);

// tesla.accelerate();

// tesla.brake();

// ///////////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// // inheretance between calsses

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log("This method overrides method form PersonCl class");
//   }
// }

// const marta = new StudentCl("Marta Davis", 2012, "Computer Science");

// console.log(marta);

// marta.introduce();
// marta.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// console.log(StudentProto);

// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calcAge();

// ///////////////////////////////////////

// const Program = {
//   display() {
//     console.log("Display method");
//   },
//   init(name, type) {
//     this.name = name;
//     this.type = type;
//   },
// };

// const js = Object.create(Program);

// js.init("Java Script", "Web development");

// console.log(js);

//////////////////////////////////////////////////////////////

class Account {
  #pin;
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // public interface
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
