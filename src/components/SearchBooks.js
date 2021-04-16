import React from 'react';
import Book from './Book';

const SearchBooks = (props) => {
  const {
    selectBookshelf,
    closeSearch,
    searchBooks,
    queriedBooks,
    booksInShelf,
    searching
  } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={closeSearch}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            onChange={(e) => searchBooks(e.target.value)}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {queriedBooks.map((book) => {
            const currentBook = booksInShelf.find((i) => book.id === i.id);
            const currentBookShelf = currentBook !== undefined ? currentBook.shelf : 'none';
            return (
              <li key={book.id}>
                <Book
                  key={book.id}
                  book={{ ...book, shelf: currentBookShelf }}
                  selectBookshelf={selectBookshelf}
                  searching={searching}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
