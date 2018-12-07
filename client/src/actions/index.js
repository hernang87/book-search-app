import * as constants from '../constants';

const fetchBooks = (query) => ({
  type: constants.FETCH_BOOKS,
  payload: {
    query
  }
});

const fetchBooksSuccess = (payload) => ({
  type: constants.FETCH_BOOKS_SUCCESS,
  payload
});

export const searchBooksByQuery = (query, page = 1) => {
  return async (dispatch) => {
    dispatch(fetchBooks(query));

    const uri = new URL(constants.SEARCH_API);
    const searchParams = new URLSearchParams();
    searchParams.append('q', query);
    searchParams.append('page', page);

    uri.search = searchParams.toString();

    const response = await fetch(uri.href);
    const json = await response.json();

    dispatch(fetchBooksSuccess({ query, json }));
  }
};