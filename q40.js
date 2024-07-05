// define a function to print each  magician name  from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containing magicians name
var magicians_name = ["ifra", "binish", "insha"];
//call the function to print array magicians name
show_magicians(magicians_name);
