//create a Array
var username = ["ifra", "binish", "insha", "rayan", "zain", "Admin"];
//using ForEach loop on Array
username.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hell0  ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello  ".concat(oneUser, ",thankyou for logging again."));
    }
});
