// define a function with a rest perament that accepect arguments representing our language
function makeSAndwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items: \n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\n now enjoy sandwich \n");
}
//call the function 3 times with 3   different  number of  arguments
makeSAndwich("chicken", "cheese", "mayo", "egg");
makeSAndwich("bread", "butter");
makeSAndwich("cheese", "tomato", "onion", "chicken", "butter");
