import React, { PureComponent } from 'react';
import Infinite from 'react-infinite';
import { bind } from 'decko';

export default class InfiniteScrollPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      elements: this.buildElements(0, 50),
      isInfiniteLoading: false,
    };
  }

  @bind
  buildElements(start, end) {
    const elements = [];

    for (let i = start; i < end; i += 1) {
      elements.push(this.renderItem(i));
    }

    return elements;
  }

  @bind
  handleInfiniteLoad() {
    this.setState({
      isInfiniteLoading: true,
    });

    setTimeout(() => {
      const elemLength = this.state.elements.length;
      const newElements = this.buildElements(elemLength, elemLength + 100);

      this.setState({
        isInfiniteLoading: false,
        elements: this.state.elements.concat(newElements),
      });
    }, 2500);
  }

  @bind
  elementInfiniteLoad() {
    return <div className="infinite-list-item">Loading...</div>;
  }

  renderItem(i) {
    const styles = {
      height: 50,
      lineHeight: '50px',
      overflow: 'scroll',
    };

    return (<div key={i} style={styles}>
      <div style={{ height: 50 }}>
      List Item {i}
      </div>
    </div>);
  }

  render() {
    return (<Infinite
      elementHeight={50}
      containerHeight={window.innerHeight}
      infiniteLoadBeginEdgeOffset={200}
      onInfiniteLoad={this.handleInfiniteLoad}
      loadingSpinnerDelegate={this.elementInfiniteLoad()}
      isInfiniteLoading={this.state.isInfiniteLoading}
      timeScrollStateLastsForAfterUserScrolls={1000}
    >
      {this.state.elements}
    </Infinite>);
  }
}
