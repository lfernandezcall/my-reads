import React from 'react';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
  const { books, bookshelfTitles, selectBookshelf, shelfBooks } = props;

  return (
    <div>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {bookshelfTitles.map((shelfTitle) => {
          return (
            <Bookshelf
              key={shelfTitle}
              selectBookshelf={selectBookshelf}
              shelfTitle={shelfTitle}
              books={shelfBooks(books, shelfTitle)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBooks;
