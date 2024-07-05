var guestArray = ["hira", "hina", "uzma"];
var canNotAttend = "uzma";
console.log("".concat(canNotAttend, "can not make it, for dinner"));
var newguest = "binish";
guestArray[guestArray.indexOf(canNotAttend)] = newguest;
console.log(guestArray);
guestArray.map(function (item) { return console.log("hello,".concat(item, " you are invited to dinner")); });
