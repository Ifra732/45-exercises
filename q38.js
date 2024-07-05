//creating a function  with perameters which return a value string
function city_country(city, country) {
    return "".concat(city, "  , ").concat(country);
}
//calling a function and print the returned value
city_country("karachi", "pakistan");
console.log(city_country("karachi", "pakistan"));
city_country("tokyo", "japan");
console.log(city_country("tokyo", "japan"));
city_country("bumbai", "india");
console.log(city_country("bumbai", "india"));
