/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router-dom';
import { sagas as apiSagas } from 'redux-connect-backend';

import * as Config from 'Config'; // eslint-disable-line import/extensions
import {
  setBaseUrl,
  addTransformParamsFn,
} from 'api-client';
import decamelizeOrderingParam from 'api-client/lib/decamelizeOrderingParam';

// Import root app
import App from 'containers/App';
import appSagas from 'containers/App/sagas';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable import/no-webpack-loader-syntax */

import configureStore from './store';
import createRoutes from './routes';

setBaseUrl(Config.API_URL);
addTransformParamsFn(decamelizeOrderingParam);

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

apiSagas.map(store.runSaga);
appSagas.map(store.runSaga);

const childRoutes = createRoutes(store);
const AppWithRouter = withRouter(App);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <AppWithRouter>
          {childRoutes}
        </AppWithRouter>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

render();
