import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './components/SearchBooks';
import Bookshelf from './components/Bookshelf';
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

  selectBookshelf = (id = 'nggnmAEACAAJ', shelf = 'read') => {
    BooksAPI.update(id, shelf);

    this.setState((currentState) => ({
      books: currentState.books.map((i) =>
        i.id === id ? ({...i, shelf}) : i
      )
    }));
  };

  render() {
    window.books = this.state.books;
    const bookshelTitles = ['Currently Reading', 'Want To Read', 'Read'];
    const textAdapter = (text) => {
      const words = text.split(' ');

      words[0] = text.split(' ')[0].toLowerCase();
      return words.join('');
    };

    return (
      <div className='app'>
        {this.state.showSearchPage ? (
          <SearchBooks closeSearch={this.onSearch} />
        ) : (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              {bookshelTitles.map((shelfTitle) => {
                const books = this.state.books.filter((book) => {
                      return book.shelf === textAdapter(shelfTitle);
                    })
                return ( books.length > 0 &&
                  <Bookshelf
                    selectBookshelf={this.selectBookshelf}
                    key={shelfTitle}
                    shelfTitle={shelfTitle}
                    books={books}
                  />
                );
              })}
            </div>
            <div className='open-search'>
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
