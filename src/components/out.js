var Namespace;
(function (Namespace) {
    function Sum(a, m) {
        return a + m;
    }
    Namespace.Sum = Sum;
})(Namespace || (Namespace = {}));
/// <reference path = "./Namespace.tsx" />
let TotalSum = Namespace.Sum(15, 3);
console.log("Total Sum: " + TotalSum);
