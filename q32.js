//creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//usi for -loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinialEnding = void 0;
    if (oneNumber === 1) {
        ordinialEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinialEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinialEnding = "rd";
    }
    else {
        ordinialEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinialEnding));
}
