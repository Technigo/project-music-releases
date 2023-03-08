import React from 'react';
import Article from './Artist';

const AlbumList = (props) => { /* props = parametern för NewsList*/
    return (
            <section>
                    {props.albums.items.map((singleAlbum) => { /* props.articlesList.articles.map plockar från en array i json */
                        return (
                <Album key={singleAlbum.id} albumDetails={singleAlbum} /> /* HTML tag Article = Album?, key ist för id, singleAlbum = gurka (det vi vill ska syns utåt), albumDetails = banan? */
              )
                    }
                )}
            </section>
        );
    };

export default AlbumList;