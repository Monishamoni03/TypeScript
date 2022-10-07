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
var Bank = /** @class */ (function () {
    function Bank() {
    }
    return Bank;
}());
var SBI = /** @class */ (function (_super) {
    __extends(SBI, _super);
    function SBI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBI.prototype.getInterest = function () {
        return 3.7;
    };
    return SBI;
}(Bank));
var IC = /** @class */ (function (_super) {
    __extends(IC, _super);
    function IC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IC.prototype.getInterest = function () {
        return 5.7;
    };
    return IC;
}(Bank));
var sbi = new SBI();
console.log(sbi.getInterest());
var ic = new IC();
console.log(ic.getInterest());
