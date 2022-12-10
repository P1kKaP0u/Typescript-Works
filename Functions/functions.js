"use strict";
exports.__esModule = true;
function addition(x, y) {
    return x + y;
}
function addition2(x, y) {
    return x + y;
}
var addition3 = function (x, y) {
    return x + y;
};
console.log(addition(2, 3));
console.log(addition("Ankara", 2));
console.log(addition2(5, 10));
console.log(addition3(19, 123));
//Function with default value
function addition4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(addition4(3));
console.log(addition4(5, 10));
//Function with optional value
function addition5(x, y) {
    // If y is defined
    if (y) {
        return x + y;
    }
    return x;
}
console.log(addition5(90));
console.log(addition5(90, 5));
//Function with rest parameter
function Invite(first_Invited) {
    var other_Inviteds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other_Inviteds[_i - 1] = arguments[_i];
    }
    return first_Invited + " " + other_Inviteds.join(" ");
}
console.log(Invite("Engin", "Derin", "Salih", "Ahmet"));
console.log(Invite("Kemal"));
