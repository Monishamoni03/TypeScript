class Vehicle {
    car: string;        //fields

    constructor(car: string) {
        this.car = car
    }

    displayFunction():void {
        console.log("Function will display the Car: " +this.car)
    } 
}

//creating an Object
var object = new Vehicle("Nano")

//accessing the Field(car: string)
console.log("Attribute value of Car: "+object.car);

//accessing the Function
object.displayFunction()