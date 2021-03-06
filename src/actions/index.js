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
    state.news[query] : null) || [];
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
      // console.log('what is getState', getState());
      return dispatch({
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories(query)
      });
    } else {
      return Promise.resolve();
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
//   type: 'DO_SEARCH_FULLFILLED',
//   payload: //promise resolution
// }
//
// {
//   type: 'DO_SEARCH_REJECTED'
//   payload: //promoise rejection
// }
