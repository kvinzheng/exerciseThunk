//news reducer.
const initialState = {
  isFetching: true,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':
      return {...state, results: action.payload.hits};
    default:
      return state
  }
}

export default reducer;
