// From Step 7:
// a reducer takes in two things -->
// 1. the action (info about what happened)
// 2. a copy of the current store

function postComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the existing state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      console.log(action)
      // return the new state, without the deleted comment
      return[
        // from the start of the comments array, to the one we want to delete
        ...state.slice(0, action.index),
        // after the one to delete, to the end
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
