/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import chatReducer from 'react-chat/lib/reducer';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { modalReducer } from 'redux-modal';
import { reducer as authenticationReducer } from 'redux-auth';
import { reducer as backendReducer } from 'redux-connect-backend';
import { reducer as reduxFormReducer } from 'redux-form/immutable';
import { reducer as tableContainerReducer } from 'react-table-container';
import builtReducer from 'built/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    auth: authenticationReducer,
    backend: backendReducer,
    built: builtReducer,
    chat: chatReducer,
    form: reduxFormReducer,
    global: globalReducer,
    language: languageProviderReducer,
    modal: modalReducer,
    route: routeReducer,
    tableContainer: tableContainerReducer,
    ...asyncReducers,
  });
}
