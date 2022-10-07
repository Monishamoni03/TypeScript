var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setName = function (carName) {
        this.name = carName;
    };
    Car.prototype.getName = function () {
        return this.name;
    };
    return Car;
}());
var car = new Car();
car.setName("BMW");
console.log(car.getName());
