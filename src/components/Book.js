import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.bookCover}`,
          }}
        />
        <BookShelfChanger id={props.id} shelf={props.shelf} selectBookshelf={props.selectBookshelf}/>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors.join(', ')}</div>
    </div>
  );
}

export default Book;
