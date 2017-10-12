import { fromJS } from 'immutable';
import {
  components,
  containers,
} from './entries';

const initialState = fromJS({
  navigation: {
    components,
    containers,
  },
});

function builtReducer(state = initialState) {
  return state;
}

export default builtReducer;
