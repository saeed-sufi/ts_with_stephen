"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    var todo = res.data;
    var ide = todo.id;
    console.log(todo);
});
var numbers = [1, 2, 3, 4];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge: function (age) {
        this.age = age;
    },
};
var age = profile.age;
// const a: number = profile.age
var setAg = profile.setAge;
var setAge = profile.setAge;
// const { lat, lng }: {lat: number, lng:number} = profile.coords
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(lat, lng);
