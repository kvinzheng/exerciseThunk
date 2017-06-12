//query reducer.

const query = (state = "", action) => {
  switch (action.type) {
    case 'SET_QUERY':
    // console.log('what is action.text', action.text);
      return action.text;
    default:
      return state
  }
}

export default query
