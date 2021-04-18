import React from 'react';
import { getAll, update, search } from './BooksAPI';
import './App.css';
import SearchBooks from './components/SearchBooks';
import { BrowserRouter, Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
class BooksApp extends React.Component {
  state = {
    bookshelfTitles: ['Currently Reading', 'Want To Read', 'Read'],
    books: [],
    queriedBooks: []
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () =>
    getAll().then((books) => {
      this.setState({ books });
    });

  handleSearchError = (query) => {
    this.setState({ queriedBooks: [] });
    console.log(`The query "${query}" is not allowed, check the SEARCH_TERMS.md file...`);
  };

  fetchSearch = (query) => {
    search(query).then((queriedBooks = []) => {
      queriedBooks.error ? this.handleSearchError(query) : this.setState({ queriedBooks });
    });
  };

  selectBookshelf = (id, shelf, searching) => {
    update(id, shelf).then(() => {
      searching && this.fetchBooks();
    });
    !searching &&
      this.setState((currentState) => ({
        books: currentState.books.map((i) => (i.id === id ? { ...i, shelf } : i))
      }));
  };

  textAdapter = (text) => {
    const words = text.split(' ');

    words[0] = text.split(' ')[0].toLowerCase();
    return words.join('');
  };

  shelfBooks = (books, shelfTitle) => {
    return books.filter((book) => book.shelf === this.textAdapter(shelfTitle));
  };

  searchBooks = (query) => {
    query === '' ? this.setState({ queriedBooks: [] }) : this.fetchSearch(query);
  };

  render() {
    const { bookshelfTitles, queriedBooks, books } = this.state;

    return (
      <div className="app">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks
                shelfBooks={this.shelfBooks}
                bookshelfTitles={bookshelfTitles}
                selectBookshelf={this.selectBookshelf}
                books={books}
              />
            )}
          />
          <Route
            path="/search"
            render={({ history }) => (
              <SearchBooks
                closeSearch={() => {
                  history.push('/');
                  this.setState({ ...this.state, queriedBooks: [] });
                }}
                selectBookshelf={this.selectBookshelf}
                queriedBooks={queriedBooks}
                booksInShelf={books}
                searchBooks={this.searchBooks}
                searching={true}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
