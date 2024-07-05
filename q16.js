var guestArray = ["hira", "hina", "uzma"];
var canNotAttend = "uzma";
var newguest = "binish";
guestArray[guestArray.indexOf(canNotAttend)] = newguest;
// guestArray..map((item)=>  console.log(`hello,${item} you are invited to dinner`
guestArray.unshift("noreen");
var middleGuest = "aqsa";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
guestArray.push("ifra");
console.log("we can invite only two people for dinner");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nsorry  ".concat(removeguest, " we can't invite for dinner"));
}
;
guestArray.map(function (items) { return console.log("\n".concat(items, " you are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
