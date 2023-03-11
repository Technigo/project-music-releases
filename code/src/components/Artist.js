import React from 'react';

// delimiter code from https://stackoverflowteams.com/c/technigo/questions/2239

/* from chatgpt:
This code defines a function called generateDelimiter
that takes in two arguments: index and length.

The purpose of the function is to generate a delimiter string
to be used when joining together items in a list.
The delimiter string will be different depending on the position
of the current item in the list.

The function first checks if the current index
is equal to the second to last index in the list (i.e. length - 2).
If it is, the function returns the string ' & ' as the delimiter.
This is because the second to last item in a list
is usually separated from the last item with an ampersand in English.

If the current index is not the second to last index,
the function checks if the index is less than the second to last index.
If it is, the function returns a comma
followed by a space ', ' as the delimiter.
This is because items in a list are usually separated by commas in English.

If neither of these conditions are met,
the function does not return anything,
since there is no need for a delimiter.
*/

const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return ' & ';
  } else if (index < length - 2) {
    return ', ';
  }
};

export const Artist = (props) => {
  return (
    <span style={{ color: '#a0a0a0' }}>
      {/* looping through array of artist names} */}
      {props.artist.map((items, index) => {
        return (
          <>
            <a key={items.id} href={items.external_urls.spotify} className="artist-name">{items.name}</a>
            {generateDelimiter(index, props.artist.length)}
          </>
        )
      })}
    </span>
  )
};