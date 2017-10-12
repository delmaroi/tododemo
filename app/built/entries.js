import React from 'react';

export const components = {
  title: 'Atomic Components',
  description: 'Atomic Components are individual UI elements.',
  entries: {
    button: {
      name: 'Button',
      url: '/display-component/button',
      component: (props) => (<button {...props}>Click me</button>),
      props: {
        style: {
          color: 'red',
        },
      },
      propsCategories: [
        {
          name: 'Type',
          key: 'type',
          type: 'multipleChoice',
          propsItems: [
            {
              title: 'Filled',
              props: {
                disabled: true,
              },
            },
            {
              title: 'Outline',
              props: {
                style: {
                  border: '5px solid red',
                },
              },
            },
            {
              title: 'Outline secondary',
              props: {
                error: true,
              },
            },
            {
              title: 'Block',
              props: {
                error: true,
              },
            },
          ],
        },
        {
          name: 'States',
          type: 'choice',
          propsItems: [
            {
              title: 'Disabled',
              props: {
                disabled: true,
              },
            },
            {
              title: 'Error',
              props: {
                error: true,
              },
            },
          ],
        },
      ],
    },
    form: {
      name: 'Form',
      url: '/display-component/form',
      component: () => (<div>component Form</div>),
    },
    modal: {
      name: 'Modal',
      url: '/display-component/modal',
      component: () => (<div>component Modal</div>),
    },
    notifications: {
      name: 'Notifications',
      url: '/display-component/notifications',
      component: () => (<div>component Notifications</div>),
    },
    search: {
      name: 'Search',
      url: '/display-component/search',
      component: () => (<div>component Search</div>),
    },
    switch: {
      name: 'Switch',
      url: '/display-component/switch',
      component: () => (<div>component Switch</div>),
    },
    tab: {
      name: 'Tab',
      url: '/display-component/tab',
      component: () => (<div>component Tab</div>),
    },
  },
};

export const containers = {
  title: 'Functional Components',
  description: 'Functional Components encapsulates the specific functionalities.',
  entries: {
    signIn: {
      name: 'Sign In',
      url: '/sign-in',
    },
    sinUp: {
      name: 'Sign Up',
      url: '/sign-up',
    },
    signOut: {
      name: 'Sign Out',
      url: '/sign-out',
    },
    forgotPassword: {
      name: 'Forgot password?',
      url: '/request-password-reset',
    },
    infiniteScroll: {
      name: 'Infinite Scroll',
      url: '/infinite-scroll',
    },
    stripePayment: {
      name: 'Stripe payments',
      url: '/payment',
    },
    userProfile: {
      name: 'User Profile',
      url: '/user-profile',
    },
    exampleSurvey: {
      name: 'Example survey',
      url: '/example-survey',
    },
    exampleTable: {
      name: 'Example table',
      url: '/example-table',
    },
    placesAutocomplete: {
      name: 'Places Autocomplete',
      url: '/places-autocomplete-example',
    },
    datepicker: {
      name: 'Datepicker',
      url: '/datepicker-example',
    },
    mentions: {
      name: 'Mentions',
      url: '/mentions',
    },
    modals: {
      name: 'Modals',
      url: '/modals',
    },
  },
};
