import Axios from 'axios';
import {
  GET_CHARACTER_DATA,
  GET_DETAIL_CHARACTER_DATA,
  GET_MOVIE_DATA,
  SET_IS_FETCHING_CHARACTER,
  SET_IS_FETCHING_DETAIL_CHARACTER,
} from '../types';

export const setIsFetchingCharacter = (isFetching) => {
  return async (dispatch) => {
    dispatch({
      type: SET_IS_FETCHING_CHARACTER,
      payload: isFetching,
    });
  };
};

export const setIsFetchingDetailCharacter = (isFetching) => {
  return async (dispatch) => {
    dispatch({
      type: SET_IS_FETCHING_DETAIL_CHARACTER,
      payload: isFetching,
    });
  };
};

export const getCharacterData = () => {
  return async (dispatch) => {
    dispatch(setIsFetchingCharacter(true));
    await Axios.get(`https://swapi.dev/api/people/`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_CHARACTER_DATA,
          payload: res.data.results,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const getDetailCharacterData = (id) => {
  return async (dispatch) => {
    dispatch(setIsFetchingDetailCharacter(true));
    await Axios.get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_DETAIL_CHARACTER_DATA,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const getMovieData = () => {
  return async (dispatch) => {
    Axios.get(`https://swapi.dev/api/films/`)
      .then((res) => {
        console.log(res.data.results);
        dispatch({
          type: GET_MOVIE_DATA,
          payload: res.data.results,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
