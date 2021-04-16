import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import defaultBackgroundImg from '../images/no_images_available.jpeg'

const Book = (props) => {
  const {book: {imageLinks = {thumbnail: defaultBackgroundImg}, shelf, id, title, authors}, searching, selectBookshelf} = props;

  return (
    <div className="book">
      <div className="book-top">
      <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url('${imageLinks.thumbnail}')`,
          }}
        />
        <BookShelfChanger id={id} shelf={shelf} selectBookshelf={selectBookshelf} searching={searching}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(', ')}</div>
    </div>
  );
}

export default Book;
