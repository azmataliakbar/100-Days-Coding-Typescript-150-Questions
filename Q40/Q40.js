"use strict";
/*Q40: Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/

// Function describe object properties
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) { // If tracks is undefined, this line will not be executed, and the album object will not have a tracks property but track is defined, this line will be executed, and the album object will not have a tracks property
        album.tracks = tracks;
    }
    return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1", 10);
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3", 15);

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);