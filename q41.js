function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//define an array of magicians names
var magician_name = ["ifra", "binish", "insha"];
var great_magicians = make_great(magician_name);
show_magicians(great_magicians);
