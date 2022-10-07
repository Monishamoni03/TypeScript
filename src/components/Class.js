var Vehicle = /** @class */ (function () {
    function Vehicle(car) {
        this.car = car;
    }
    Vehicle.prototype.displayFunction = function () {
        console.log("Function will display the Car: " + this.car);
    };
    return Vehicle;
}());
//creating an Object
var object = new Vehicle("Nano");
//accessing the Field(car: string)
console.log("Attribute value of Car: " + object.car);
//accessing the Function
object.displayFunction();
