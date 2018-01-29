const Elevator = require("./elevator.js");
let elevator = new Elevator();

const Person = require("./person.js");
elevator.floorUp();
elevator.floorUp();
let person1 = new Person("john", 2, 3);
let person2 = new Person("janny", 2, 4);
let person3 = new Person("jany", 0, 6);
elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator._passengersEnter();
//console.log(elevator.waitingList);
elevator.floorUp();

elevator._passengersLeave();
console.log(elevator.passengers);
