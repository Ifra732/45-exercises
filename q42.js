function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//define an array of magicians names
var magician_names = ["ifra", "binish", "insha"];
//making a copy of orignal array through.slice()function
var copy_magicians_names = magician_names.slice();
//modify the copied array to include "the great " with their names
var copy_great_magicians = make_great(copy_magicians_names);
//show both arrays orignal and copied
//orignal arrays
show_magicians(magician_names);
//copied
show_magicians(copy_great_magicians);
