//news reducer.
const initialState = {
  // isFetching: true,
  // results: []
}

function news(state = { }, action ){
  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':

      return Object.assign({}, {

        [action.payload.query]: action.payload.hits
      });
      default:
      return state;
  }
}

const reducer = (state = initialState, action) => {
  console.log('state=======', state);


  // console.log('what is news(state[action.payload.query]', news(state[action.payload.query]));

  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':
    // console.log('what is action.payload.query', action.payload.query);
    // console.log('what is state[action.payload.query]',  state[action.payload.query]);
    // console.log('what is action.payload',action.payload);
    console.log('what is action.payload.hits',action.payload.hits);
    let tempQueryObj = {
      current: {
        list: action.payload.hits,
      },
    }
    return Object.assign({}, state, tempQueryObj, news(state, action))

    // case 'DO_SEARCH_PENDING':
    //   let isFetchingObj = {
    //     isFetching: true,
    //   }
    //   return Object.assign({}, state, {
    //     [action.payload.query]: news(state[action.payload.query], action)
    //   })
      // return {...state, results: action.payload.hits};
    default:
      return state
  }
}

export default reducer;
