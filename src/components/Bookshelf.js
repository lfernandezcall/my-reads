import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
  const { books, shelfTitle, selectBookshelf } = props;

  return (
    books.length > 0 && (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelfTitle}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <Book key={book.id} book={book} selectBookshelf={selectBookshelf} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    )
  );
};

export default Bookshelf;
