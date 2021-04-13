import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => {
              return (
                <li key={book.title}>
                  <Book
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
    );
  }
}

export default Bookshelf;
