var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(classmate) {
        this.classmate = classmate;
    }
    return Book;
}());
var NoteBook = /** @class */ (function (_super) {
    __extends(NoteBook, _super);
    function NoteBook(classmate, price) {
        var _this = _super.call(this, classmate) || this;
        _this.price = price;
        return _this;
    }
    NoteBook.prototype.displayFunction = function () {
        console.log("Function will display the Book: " + this.classmate);
        console.log("Book Price: " + this.price);
    };
    return NoteBook;
}(Book));
//creating an Object
var obj = new NoteBook("Classmate", 250);
//accessing the Function
obj.displayFunction();
