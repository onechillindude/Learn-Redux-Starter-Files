// Because this example app is small, all of the action creators are being
// stored in this one file, but you can break them out into separte files
// as you see fit.
// See Step 6 at the 3:00 minute mark.

//increment
export function increment (index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
}

// add comment
export function addComment (postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment,
  };
}

// remove comment
export function removeComment (postId, index) {
  return{
    type: 'REMOVE_COMMENT',
    index,
    postId,
  }
}

// NOTE: router history actions are 'automatic' due to the use of
// react-router-redux module.
