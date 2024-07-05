//creating Array
var pizza = ["chicken Tikka", "fajita", "malai Botti"];
//using for_loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("i like ".concat(onepizza, " pizza"));
}
//print the message  outside of the for-loop
console.log("pizza is love");
