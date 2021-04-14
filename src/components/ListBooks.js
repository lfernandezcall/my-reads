import React from 'react';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
  const { books, bookshelfTitles, selectBookshelf, shelfBooks } = props;

  return (
    <div className='list-books-content'>
      {bookshelfTitles.map((shelfTitle) => {
        return (
          <Bookshelf
            selectBookshelf={selectBookshelf}
            key={shelfTitle}
            shelfTitle={shelfTitle}
            books={shelfBooks(books, shelfTitle)}
          />
        );
      })}
    </div>
  );
};

export default ListBooks;