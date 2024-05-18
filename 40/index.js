/*
!Question 40: Album: Create objects for music albums.
  */
/*
todo=> Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.
*/
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log("\n", make_album("Artist One", "The First Album"));
console.log("\n", make_album("Artist Two", "The Second Album"));
console.log("\n", make_album("Artist Three", "The Third Album", 12));
export {};
