import didditHelper from '../lib/helper.js';
//import newThreadsAction from './newThreadsAction.js';
import topThreadsAction from './topThreadsAction.js';

import _ from 'lodash';

var handleDidditSearch = (query) => {

  return _.debounce(function(dispatch) {
    didditHelper.findDiddit(query, (subdiddit) => {
      dispatch(topThreadsAction(subdiddit));
    });
  }, 200);
  };

export default handleDidditSearch;