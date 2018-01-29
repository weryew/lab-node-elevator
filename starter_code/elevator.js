class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = "";
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
  }
  start() {
    () =>
      setInterval(() => {
        this.update();
      }, 1000);
  }
  stop() {
    clearInterval(
      setInterval(() => {
        this.update();
      }, 1000)
    );
  }
  update() {
    this.log(this.floor, this.direction);
  }
  _passengersEnter() {
    if (this.waitingList.length !== 0) {
      let personEntering = this.waitingList.filter(
        passenger => passenger.originFloor === this.floor
      );
      for (let i = 0; i < personEntering.length; i++) {
        console.log(`${personEntering[i].name} has enter the elevator`);
        this.passengers.push(personEntering[i]);
        this.requests.push(personEntering[i].destinationFloor);
      }
      this.waitingList = this.waitingList.filter(
        passenger => passenger.originFloor !== this.floor
      );
    }
  }
  _passengersLeave() {
    let personLeaving = this.passengers.filter(
      passenger => passenger.destinationFloor === this.floor
    );
    for (let i = 0; i < personLeaving.length; i++) {
      console.log(personLeaving[i]);
    }
    this.passengers = this.passengers.filter(
      passenger => passenger.destinationFloor !== this.floor
    );
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.direction = "up";
    } else {
      console.log(undefined);
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor--;
      this.direction = "down";
    } else {
      console.log(undefined);
    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction:${this.direction}|Floor:${this.floor}`);
  }
}

module.exports = Elevator;
