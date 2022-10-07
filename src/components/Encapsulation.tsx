class Car {
    private name: string;
    engine: string;

    public setName(carName: string) {
        this.name = carName;
    }

    public getName() {
        return this.name;
    }
}

let car = new Car();
car.setName("BMW");
console.log(car.getName());