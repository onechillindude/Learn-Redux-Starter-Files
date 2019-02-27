// From Step 7:
// a reducer takes in two things -->
// 1. the action (info about what happened)
// 2. a copy of the current store

function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return the updated state
      console.log('Incrementing Likes!');
      const index = action.index;
      return [
        ...state.slice(0, index),  // section of original array before the update
        {...state[index], likes: state[index].likes + 1},  // update a *copy* of the object that we wish to update in the array
        ...state.slice(index + 1)  // section of the array after the update
      ]
    default:
      return state;
  }
}

export default posts;
