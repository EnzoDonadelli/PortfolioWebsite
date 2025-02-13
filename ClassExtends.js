class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }

    startEngine() {
        console.log("Engine Started");
    }
}

class Car extends Vehicle {
    constructor(make, year, numDoors) {
        super(make, year);
        this.numDoors = numDoors;
    }

    startEngine() {
        console.log("Car engine started");
    }
}

// Example usage:
const myVehicle = new Vehicle('Toyota', 2020);
myVehicle.startEngine(); // Logs "Engine Started"
const myCar = new Car("Toyota", 2020, 4);
myCar.startEngine(); // Logs "Car engine started"