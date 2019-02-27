import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/root';

// import some data (could come from an API, but is coming here from sample
// files instead).
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// create the redux store
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// the following will allow us to Hot Reload the reducers with webpack
// without this, only the components would get hot reloaded, which is the 
// default behavior.
// See Step 18.
// This actually doesn't work with newer versions of webpack
// Leaving it here, commented out, for the Final git commit before I go 
// and try to Update All The Things...
//if(module.hot) {
//  module.hot.accept('./reducers/',() => {
//    const nextRootReducer = require('./reducers/root').default;
//    store.replaceReducer(nextRootReducer);
//  });
//}

export default store;
