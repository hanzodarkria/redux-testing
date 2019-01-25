function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      console.log('the state : ', state);
      console.log('the action : ', action);
      console.log('the before : ', ...state.slice(0,i));
      console.log('current  : ', {...state[i], likes: state[i].likes + 1});
      console.log('after : ', ...state.slice(i + 1));
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;
