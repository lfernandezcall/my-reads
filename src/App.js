import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './components/SearchBooks';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
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

  closeSearch = () => {
    this.setState({ showSearchPage: !this.state.showSearchPage });
  };

  selectBookshelf = (id = 'nggnmAEACAAJ', shelf = 'read') => {
    BooksAPI.update(id, shelf);

    this.setState((currentState) => ({
      books: currentState.books.map((i) => (i.id === id ? { ...i, shelf } : i)),
    }));
  };

  render() {
    window.books = this.state.books;
    const bookshelfTitles = ['Currently Reading', 'Want To Read', 'Read'];
    const textAdapter = (text) => {
      const words = text.split(' ');

      words[0] = text.split(' ')[0].toLowerCase();
      return words.join('');
    };

    const shelfBooks = (books, shelfTitle) => {
      return books.filter((book) => book.shelf === textAdapter(shelfTitle));
    };

    return (
      <div className='app'>
        <BrowserRouter>
          <Route
            exact
            path='/'
            render={() => (
              <ListBooks
                shelfBooks={shelfBooks}
                bookshelfTitles={bookshelfTitles}
                selectBookshelf={this.selectBookshelf}
                books={this.state.books}
              />
            )}
          />
          <Route
            path='/search'
            render={({ history }) => (
              <SearchBooks
                closeSearch={() => {
                  // this.closeSearch();
                  history.push('/');
                }}
              />
            )}
          />
          <Link className='open-search' to='/search'>
            Add a book
          </Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
