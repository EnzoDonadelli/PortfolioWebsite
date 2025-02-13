// Vehicle constructor function
function Vehicle(make, year) {
    this.make = make;
    this.year = year;
}

// Adding startEngine method to Vehicle prototype
Vehicle.prototype.startEngine = function() {
    console.log("Engine Started");
};

// Car constructor function inheriting from Vehicle
function Car(make, year, numDoors) {
    Vehicle.call(this, make, year); // Call the parent constructor
    this.numDoors = numDoors;
}

// Setting up inheritance from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Overriding startEngine method in Car prototype
Car.prototype.startEngine = function() {
    console.log("Car engine started");
};

// Example usage
const myVehicle = new Vehicle('Toyota', 2020);
myVehicle.startEngine(); // Logs "Engine Started"
const myCar = new Car('Toyota', 2020, 4);
myCar.startEngine(); // Logs "Car engine started"