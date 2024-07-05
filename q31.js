//Array of current users
var current_users = ["usman", "ali", "areeba", "zain", "osama"];
var new_users = ["humza", "Ayesha", "Ali", "Mahad", "Areeba"];
//loop through new users to check for usernames availbility
new_users.forEach(function (new_one_user) {
    //making a condition for username already asisty and save in our condition variable  
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user; });
    //prrint different message using if else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, "is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, "is available"));
    }
});
