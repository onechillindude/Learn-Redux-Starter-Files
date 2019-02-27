import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// NOTE: It is a foundational premise of Redux that *every* reducer runs
// *every* time there is an action, whether that reducer cares about the
// action or not.
// See: Step 9 at 4:00 mark.

const rootReducer = combineReducers(
  { posts, comments, routing: routerReducer}
);

export default rootReducer;
