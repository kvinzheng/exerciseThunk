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
    .then(response => response.data)
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

export const doSearch = (query) => {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState(), query)) {
      return dispatch({
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories(query)
      });
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
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
