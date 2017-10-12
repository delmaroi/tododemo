import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';

// import translation messages
import { translationMessages } from '../app/i18n';

// add a decorator to wrap stories rendering into IntlProvider
const DEFAULT_LOCALE = 'en';
addDecorator((story) => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    { story() }
  </IntlProvider>
));

// stories loader
const req = require.context('../app', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// initialize react-storybook
configure(loadStories, module);
