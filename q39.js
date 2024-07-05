function make_album(artist, album, tracks) {
    var Album = {
        artist: artist,
        title: album
    };
    if (tracks !== undefined) {
        //     album.tracks    = tracks ;
    }
    return album;
}
//calling three function and creating 3 variable with different values
var album1 = make_album("ifra", "album title 1");
var album2 = make_album("usman", "album title2");
var album3 = make_album("Ali", "album title3", 10);
//printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
