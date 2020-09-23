import {
  GET_CHARACTER_DATA,
  GET_DETAIL_CHARACTER_DATA,
  GET_MOVIE_DATA,
  SET_IS_FETCHING_CHARACTER,
  SET_IS_FETCHING_DETAIL_CHARACTER,
} from '../types';

const initialState = {
  movies: {
    data: [],
    isFetching: false,
    error: false,
  },
  character: {
    data: [],
    isFetching: false,
    error: false,
  },
  detailCharacter: {
    data: {},
    isFetching: false,
    error: false,
  },
};

const starwarsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_FETCHING_CHARACTER:
      return {
        ...state,
        character: {
          ...state.character,
          isFetching: payload,
        },
      };
    case SET_IS_FETCHING_DETAIL_CHARACTER:
      return {
        ...state,
        detailCharacter: {
          ...state.detailCharacter,
          isFetching: payload,
        },
      };
    case GET_CHARACTER_DATA:
      return {
        ...state,
        character: {
          data: payload,
          isFetching: false,
          error: false,
        },
      };
    case GET_DETAIL_CHARACTER_DATA:
      return {
        ...state,
        detailCharacter: {
          data: payload,
          isFetching: false,
          error: false,
        },
      };
    case GET_MOVIE_DATA:
      return {
        ...state,
        movies: {
          data: payload,
          isFetching: false,
          error: false,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default starwarsReducer;
