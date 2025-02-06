var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a Car');
    };
    return Car;
}());
function printHouseOrCar(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHouseOrCar([new Car(), new Car()]);
