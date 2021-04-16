const api = 'https://reactnd-books-api.udacity.com';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: token
};

const handlingError = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => handlingError(res).json())
    .then((data) => data.book)
    .catch((error) => console.log(error));

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => handlingError(res).json())
    .then((data) => data.books)
    .catch((error) => console.log(error));

export const update = (id, shelf) =>
  fetch(`${api}/books/${id}`, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ shelf })
  })
    .then((res) => handlingError(res))
    .catch((error) => console.log(error));

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then((res) => handlingError(res).json())
    .then((data) => data.books)
    .catch((error) => console.log(error));
