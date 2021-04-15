import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
  return (
    props.books.length > 0 && (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{props.shelfTitle}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {props.books.map((book) => {
              return (
                <li key={book.id}>
                  <Book
                    id={book.id}
                    shelf={book.shelf}
                    selectBookshelf={props.selectBookshelf}
                    key={book.title}
                    bookCover={book.imageLinks.thumbnail}
                    title={book.title}
                    authors={book.authors}
                  />
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
