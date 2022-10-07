class Book {
    classmate: string;        //fields

    constructor(classmate: string) {
        this.classmate = classmate
    }
}

class NoteBook extends Book {
    price: number

    constructor(classmate: string, price: number) {
        super(classmate);
        this.price = price;
    }

    displayFunction():void {
        console.log("Function will display the Book: " +this.classmate);
        console.log("Book Price: " +this.price);      
    } 
}
//creating an Object
let obj = new NoteBook("Classmate", 250);

//accessing the Function
obj.displayFunction()