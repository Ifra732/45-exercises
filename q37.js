"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//describe a  function
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling a function
describe_city("karachi");
describe_city("lahore");
describe_city("Matli");
describe_city("village", "dumbalo");
