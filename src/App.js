import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import Bookshelf from './Bookshelf';
class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  onSearch = () => {
    this.setState({ showSearchPage: !this.state.showSearchPage });
  };

  render() {
    const bookshelTitles = ['Currently Reading', 'Want To Read', 'Read'];
    const textTransform = (text) => {
      const words = text.split(' ');

      words[0] = text.split(' ')[0].toLowerCase();
      return words.join('');
    };

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks closeSearch={this.onSearch} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {bookshelTitles.map((shelfTitle) => {
                return (
                  <Bookshelf
                    key={shelfTitle}
                    shelfTitle={shelfTitle}
                    books={this.state.books.filter((book) => {
                      return book.shelf === textTransform(shelfTitle);
                    })}
                  />
                );
              })}
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
