import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
    render() {
        const {bookCover, title, authors } = this.props.book

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book
                                bookCover={bookCover}
                                title={title}
                                authors={authors}
                            />
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf