import { fromJS } from 'immutable';

const initialState = fromJS({});

// TODO write tests
export const createReducerFromActionsMap = (mappedActions) => (state = initialState, action) => {
  if (Object.prototype.hasOwnProperty.call(mappedActions, action.type)) {
    return mappedActions[action.type](state, action.payload);
  }

  return state;
};
