import React from 'react';

/* 
3. In the iteratreArtistNames below the map method is passing the current element and what's inside of it
e.g. the object artist, the array index of the current element and the array it belongs to. 
4. Then in the function we create a variable, called separator, which contains an empty string. Separator is 
then used in the if statement to help us define if we should use nothing(an empty sting), a comma or an 
ampersand between each of the artist names. This will depend on the length of the array that the map is iterating 
through at the time minus a number and the index number of that array that is returned by the map method. 
These two factors are compared in the if statement to help us return the correct separator between the names.
6. In the return below the if statement we're creating the a tag for each of the artist url and wrapping the
artist name in it. This artist name is specified by the index number that is being passed by the map method
into the function at that time.
7. In order for us to use the separator for each of the artist names, depending on their index, the a tag is 
wrapped inside a span tag so it can apply the correct separator between each name. 
*/

const iterateArtistNames = (artist, index, array) => {
    var separator = "";

    if (array.length -1 === index) {
        separator =  "";
    } else if (array.length -2 === index) {
        separator = " & ";
    } else {
        separator = ", ";
    }

    return (
        <span key={artist.id} className="separator"><a className="artist-name" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{artist.name}</a>{separator}</span>
    );
};

/* 
1. Below we're accessing the artists prop that we defined in the MusicCard component. 
2. Using map to iterate over each array element which are then passed to the function iterateArtistNames.
 */
export const MusicArtist = (prop) => {
    return (
        <h4>{prop.artists.map(iterateArtistNames)}</h4>
    );
};  