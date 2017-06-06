//news reducer.
const initialState = {
};

function news(state = {
  isFetching: false,
  didInvalidate: false,
  results: []
}, action) {
  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        results: action.payload.hits
      })
    default:
      return state
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':
      return Object.assign({}, state, {
        [action.payload.query]: news(state[action.payload.query], action)
      })
    default:
      return state
  }
}

export default reducer;
