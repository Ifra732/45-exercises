var usernames = ["ifra", "binish", "insha", "rayan", "zain", "admin"];
//remove all values from our array now our array is empty
usernames = [];
//if statment for checking length of our array is empty?
if (usernames.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    //if array is not empty use forEach loop on  array
    usernames.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thankyou for logging in again."));
        }
    });
}
