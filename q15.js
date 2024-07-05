var guestArray = ["hira", "hina", "uzma"];
var canNotAttend = "uzma";
var newguest = "binish";
guestArray[guestArray.indexOf(canNotAttend)] = newguest;
// guestArray..map((item)=>  console.log(`hello,${item} you are invited to dinner`
console.log(guestArray);
guestArray.unshift("noreen");
var middleGuest = "aqsa";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
guestArray.push("ifra");
console.log(guestArray);
guestArray.map((function (items) { return console.log("\nDear  ".concat(items, " are invited to dinner")); }));
