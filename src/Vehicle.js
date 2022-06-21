class Vehicle {
  constructor(vehicle) {
    this.vehicle = vehicle;
  }
  move(distance) {
    this.vehicle.move(distance);
  }
}

class Car {
  move(distance) {
    console.log(`Car moved ${distance}`);
  }
}

class Plane {
  move(distance) {
    console.log(`Plane moved ${distance}`);
  }
}

class Skateboard {
  move(distance) {
    console.log(`Skateboard moved ${distance}`);
  }
}

const car = new Car();
const plane = new Plane();
const skateboard = new Skateboard();
let vehicle = new Vehicle(car);
vehicle.move(1000);
vehicle = new Vehicle(plane);
vehicle.move(3000);
vehicle = new Vehicle(skateboard);
vehicle.move(200);

// Car moved 1000
// Plane moved 3000
// Skateboard moved 200
