import React, { PureComponent } from 'react';

export default function injectComponent(loader) {
  class InjectedComponent extends PureComponent {
    state = {
      component: null,
    };

    componentWillMount() {
      loader()
        .then((component) => {
          this.setState({
            Component: component.default,
          });
        });
    }

    render() {
      const { Component } = this.state;

      if (!Component) {
        return null;
      }

      return <Component {...this.props} />;
    }
  }

  return InjectedComponent;
}
