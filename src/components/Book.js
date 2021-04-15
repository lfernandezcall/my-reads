import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {
  const  { bookCover, shelf, id, selectBookshelf, title, authors, searchMode} = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookCover}`,
          }}
        />
        <BookShelfChanger id={id} shelf={shelf} selectBookshelf={selectBookshelf} searchMode={searchMode}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(', ')}</div>
    </div>
  );
}

export default Book;
