import React from 'react';

const BookShelfChanger = (props) => {
  const { shelf, selectBookshelf, id, searching } = props;

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => selectBookshelf(id, e.target.value, searching)}>
        <option value="move" disabled>
          Shelf...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
