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
import FontFaceObserver from 'fontfaceobserver';
import { withRouter } from 'react-router-dom';
import {
  AuthenticationProvider,
  sagas as authenticationSagas,
  setConfig as reduxAuthSetConfig,
} from 'redux-auth';
import { sagas as apiSagas } from 'redux-connect-backend';
import { sagas as tableContainerSagas } from 'react-table-container';

import enUS from 'antd/lib/locale-provider/en_US';

import chatSagas from 'react-chat/lib/sagas';
import chatMessagesSagas from 'react-chat/lib/Message/sagas';

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
import { translationMessages } from './i18n';
import createRoutes from './routes';

setBaseUrl(Config.API_URL);
addTransformParamsFn(decamelizeOrderingParam);

reduxAuthSetConfig({ camelizeUserDataKeys: true });
// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

apiSagas.map(store.runSaga);
appSagas.map(store.runSaga);
authenticationSagas.map(store.runSaga);
chatMessagesSagas.map(store.runSaga);
chatSagas.map(store.runSaga);
tableContainerSagas.map(store.runSaga);

const childRoutes = createRoutes(store);
const AppWithRouter = withRouter(App);

const render = (messages) => {
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

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV !== 'local') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
