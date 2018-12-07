import { 
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from '../constants'

const initialState = {
  firstSearch: true,
  isFetching: false,
  error: null,
  results: [],
  query: null,
  page: 1
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        isFetching: true,
        query: action.payload.query
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        query: action.payload.query,
        page: action.payload.json.page,
        totalPages: action.payload.json.totalPages,
        totalResults: action.payload.json.totalResults,
        results: action.payload.json.page === 1
          ? [...action.payload.json.results]
          : [ ...state.results, ...action.payload.json.results],
        firstSearch: false
      }
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      }
    default:
      return { ...state }
  }
}