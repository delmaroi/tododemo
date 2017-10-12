// import React from 'react';
// import { shallow } from 'enzyme';
// import Header from 'components/Header';
import App from '../index';

describe('<App />', () => {
  it('to be defined', () => {
    expect(App).toBeDefined();
  });
  // it('should render the header', () => {
  //   const renderedComponent = shallow(
  //     <App />
  //   );
  //   expect(renderedComponent.contains(Header).length).toBe(1);
  // });

  // it('should render its children', () => {
  //   const children = (<h1>Test</h1>);
  //   const renderedComponent = shallow(
  //     <App>
  //       {children}
  //     </App>
  //   );
  //   expect(renderedComponent.contains(children)).toBe(true);
  // });
});
