import Redux from 'redux';

var threadsReducer = (state = null, action) => {
  switch (action.type) {
  case 'NEW_THREADS':
    return action.newThreads || null;
  case 'TOP_THREADS':
    return action.topThreads || null;
  default:
    return state;
  }
};

export default threadsReducer;