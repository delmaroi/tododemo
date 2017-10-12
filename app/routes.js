// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react';
import { Route } from 'react-router-dom';
import BuiltDisplayComponentPage from 'pages/BuiltDisplayComponentPage';
import ChatPage from 'pages/ChatPage';
import DatepickerExamplePage from 'pages/DatepickerExamplePage';
import ExampleTablePage from 'pages/ExampleTablePage';
import FormsPage from 'pages/FormsPage';
import DashboardPage from 'pages/DashboardPage';
import HomePage from 'pages/HomePage';
import MentionsExamplePage from 'pages/MentionsExamplePage';
import ModalsPage from 'pages/ModalsPage';
import OnlyForAdminsPage from 'pages/OnlyForAdminsPage';
import OnlyForUserWithRoleUserOrAdminPage from 'pages/OnlyForUserWithRoleUserOrAdminPage';
import PaymentPage from 'pages/PaymentPage';
import PlacesAutocompleteExamplePage from 'pages/PlacesAutocompleteExamplePage';
import TypographyPage from 'pages/TypographyPage';
import InfiniteScrollPage from 'pages/InfiniteScrollPage';
import ToDoLists from 'pages/ToDoLists';
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
      name: 'homePage',
      component: HomePage,
      exact: true,
    }, {
      path: '/infinite-scroll',
      name: 'infinite-scroll',
      component: InfiniteScrollPage, // or
      // getComponent: () => import('pages/InfiniteScroll'),
    },
    {
      path: '/typography',
      name: 'typography',
      component: TypographyPage,
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
    }, {
      path: '/forms',
      name: 'forms',
      component: FormsPage,
    }, {
      path: '/only-for-admins',
      name: 'only-for-admins',
      component: OnlyForAdminsPage,
    }, {
      path: '/only-for-users-or-admins',
      name: 'only-for-users-or-admins',
      component: OnlyForUserWithRoleUserOrAdminPage,
    },
    {
      path: '/sign-in',
      name: 'signInPage',
      getComponent() {
        return Promise
          .all([
            import('redux-auth/lib/containers/SignInPage/reducer'),
            import('redux-auth/lib/containers/SignInPage/sagas'),
            import('redux-auth/lib/containers/SignInPage'),
          ])
          .then(([reducer, sagas, component]) => {
            injectReducer('signInPage', reducer.default);
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    }, {
      path: '/sign-up',
      name: 'signUpPage',
      getComponent() {
        return Promise
          .all([
            import('redux-auth/lib/containers/SignUpPage/reducer'),
            import('redux-auth/lib/containers/SignUpPage/sagas'),
            import('redux-auth/lib/containers/SignUpPage'),
          ])
          .then(([reducer, sagas, component]) => {
            injectReducer('signUpPage', reducer.default);
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    }, {
      path: '/sign-out',
      name: 'signOutPage',
      getComponent() {
        return Promise
          .all([
            import('redux-auth/lib/containers/SignOutPage/sagas'),
            import('redux-auth/lib/containers/SignOutPage'),
          ])
          .then(([sagas, component]) => {
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    }, {
      path: '/request-password-reset',
      name: 'requestPasswordResetPage',
      getComponent() {
        return Promise
          .all([
            import('redux-auth/lib/containers/RequestPasswordResetPage/reducer'),
            import('redux-auth/lib/containers/RequestPasswordResetPage/sagas'),
            import('redux-auth/lib/containers/RequestPasswordResetPage'),
          ])
          .then(([reducer, sagas, component]) => {
            injectReducer('requestPasswordResetPage', reducer.default);
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    }, {
      path: '/reset-password-confirm/:resetPasswordToken', // reset-password
      name: 'resetPasswordPage',
      getComponent() {
        return Promise
          .all([
            import('redux-auth/lib/containers/ResetPasswordPage/reducer'),
            import('redux-auth/lib/containers/ResetPasswordPage/sagas'),
            import('redux-auth/lib/containers/ResetPasswordPage'),
          ])
          .then(([reducer, sagas, component]) => {
            injectReducer('resetPasswordPage', reducer.default);
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    },
    {
      path: '/datepicker-example',
      name: 'datepickerExamplePage',
      component: DatepickerExamplePage,
    }, {
      path: '/places-autocomplete-example',
      name: 'PlacesAutocompleteExamplePage',
      component: PlacesAutocompleteExamplePage,
    }, {
      path: '/payment',
      name: 'PaymentPage',
      component: PaymentPage,
    }, {
      path: '/modals',
      name: 'ModalsPage',
      component: ModalsPage,
    }, {
      path: '/user-profile',
      name: 'userProfilePage',
      getComponent() {
        return Promise
          .all([
            import('pages/UserProfilePage/reducer'),
            import('pages/UserProfilePage/sagas'),
            import('pages/UserProfilePage'),
          ])
          .then(([reducer, sagas, component]) => {
            injectReducer('userProfilePage', reducer.default);
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    }, {
      path: '/example-survey',
      name: 'exampleSurveyPage',
      getComponent() {
        return Promise
          .all([
              import('pages/ExampleSurveyPage/reducer'),
              import('pages/ExampleSurveyPage/sagas'),
              import('pages/ExampleSurveyPage'),
          ])
          .then(([reducer, sagas, component]) => {
            injectReducer('exampleSurveyPage', reducer.default);
            injectSagas(sagas.default);

            return component;
          })
          .catch(errorLoading);
      },
    },
    {
      path: '/example-table',
      name: 'exampleTablePage',
      component: ExampleTablePage,
    }, {
      path: '/chat(/:threadId)',
      name: 'chatPage',
      component: ChatPage,
    },
    {
      path: '/display-component/:key',
      name: 'builtDisplayComponentPage',
      component: BuiltDisplayComponentPage,
    },
    {
      path: '/mentions',
      name: 'MentionsExamplePage',
      component: MentionsExamplePage,
    },
    {
      path: '/todolists',
      name: 'ToDoLists',
      component: ToDoLists,
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
