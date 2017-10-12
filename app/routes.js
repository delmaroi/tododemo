// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react';
import { Route } from 'react-router-dom';
import ToDoLists from './pages/ToDoLists';
import { getAsyncInjectors } from './utils/asyncInjectors';
import injectComponent from './utils/injectComponent';

const errorLoading = (error) => {
  console.error('Dynamic page loading failed', error); // eslint-disable-line no-console
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const {
    injectReducer,
    injectSagas,
  } = getAsyncInjectors(store);

  const routesProps = [
    {
      path: '/',
      name: 'to',
      component: ToDoLists,
      exact: true,
    },
  ];

  return routesProps.map(mapToRouteNodes);
}

function mapToRouteNodes(routeParams) {
  const {
    getComponent,
    component,
    name,
    ...routeProps
  } = routeParams;

  if (component) {
    routeProps.component = component;
  } else if (getComponent) {
    routeProps.component = injectComponent(getComponent);
  }

  return <Route key={name} {...routeProps} />;
}
