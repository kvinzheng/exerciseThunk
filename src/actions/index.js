//put action creators here.
//and example might be:
import axios from 'axios';
import * as CONST from '../constants';

function fetchSearchTopStories(query, page = 0) {
  const API_URL = [
    `${CONST.PATH_BASE}`,
    `${CONST.PATH_SEARCH}`,
    '?',
    `${CONST.PARAM_SEARCH}`,
    `${query}`,
    '&',
    `${CONST.PARAM_PAGE}`,
    `${page}`,
    '&',
    `${CONST.PARAM_HPP}`,
    `${CONST.DEFAULT_HPP}`,
  ].join('');

  return axios
    .get(API_URL)
    .then(response => response.data);
}

export const shouldFetchNews = function(state, query, page = 0){
  const results = (state.news[query] ?
    state.news[query].results : null) || [];
  return !results.length;
}

export const shouldFetchNews = function(state, query, page = 0) {
  const  results = (state.news[query] ? state.news[query].results : null) || []
  return !results.length;
}

export const setQuery = (text) => {
  return {
    type: 'SET_QUERY',
    text
  }
}

// dispatch({ type: TYPE, ... });
// dispatch(() => {});
// dispatch(doSearch('react'));
//
// ==== somewhere in ThunkMiddleware
//
// fn(store.dispatch, store.getState);

export const doSearch = (query) => {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState(), query)) {
<<<<<<< HEAD
      // console.log('what is getState', getState());
=======
>>>>>>> 37bc7bd3aa9277268e6c5e7b8cefa875decddd9c
      return dispatch({
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories(query)
      });
    } else {
<<<<<<< HEAD
      return Promise.resolve();
=======
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
>>>>>>> 37bc7bd3aa9277268e6c5e7b8cefa875decddd9c
    }
  }
  // return {
  //   type: 'DO_SEARCH',
  //   payload: fetchSearchTopStories(query)
  // }
}

//dispatching the DO_SEARCH action, will result in the following actions being
//dispatched from the redux promise middleware
//
// {
//   type: 'DO_SEARCH_PENDING'
// }
//
// {
//   type: 'DO_SEARCH_FULFILLED',
//   payload: //promise resolution
// }
//
// {
//   type: 'DO_SEARCH_REJECTED'
//   payload: //promoise rejection
// }
