import React from 'react';
import Book from './Book';
class SearchBooks extends React.Component {
  render() {
    const { selectBookshelf } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <button className='close-search' onClick={this.props.closeSearch}>
            Close
          </button>
          <div className='search-books-input-wrapper'>
            <input
              onChange={(e) => this.props.searchBooks(e.target.value)}
              type='text'
              placeholder='Search by title or author'
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.props.queriedBooks.map((book) => {
           
              return (
                <li key={book.id}>
                  <Book
                    id={book.id}
                    shelf={book.shelf = 'none'}
                    selectBookshelf={selectBookshelf}
                    key={book.title}
                    bookCover={book.imageLinks && book.imageLinks.thumbnail}
                    title={book.title}
                    authors={book.authors}
                    searchMode={this.props.searchMode}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;


