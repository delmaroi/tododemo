import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { selectBuiltComponents } from 'built/selectors';
import FormItem from 'components/FormItem';
import Radio from 'components/Radio';

const mapStateToProps = createStructuredSelector({
  components: selectBuiltComponents,
});

@connect(mapStateToProps)
export default class BuiltDisplayComponentPage extends PureComponent {
  static propTypes = {
    components: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      props: Map(),
    };

    this.componentSettings = props.components[props.match.params.key];
    this.getChangePropHandler = this.getChangePropHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.componentSettings = nextProps.components[nextProps.match.params.key];
  }

  getName() {
    return this.componentSettings.name;
  }

  getComponent() {
    return this.componentSettings.component;
  }

  getPropsCategories() {
    return this.componentSettings.propsCategories;
  }

  getComponentProps() {
    const propsInCategories = this.state.props.toJS();

    return Object.values(propsInCategories).reduce(
      (allProps, categoryProps) => ({
        ...allProps,
        ...categoryProps,
      }),
      this.componentSettings.props
    );
  }

  getChangePropHandler(propsCategory) {
    return (event) => {
      const { props } = propsCategory.propsItems[event.target.value];

      this.setState((prevState) => ({
        props: prevState.props.set(propsCategory.key, props),
      }));
    };
  }

  render() {
    const name = this.getName();
    const propsCategories = this.getPropsCategories();
    const Component = this.getComponent();
    const componentProps = this.getComponentProps();

    return (
      <div className="built-component">
        <Helmet
          title={name}
          meta={[
            { name: 'description', content: 'Chat' },
          ]}
        />

        {propsCategories &&
          <div className="built-component__options">
            {propsCategories.map((propsCategory) => (
              <div key={propsCategory.key}>
                <div className="built-component__options__header">{propsCategory.name}</div>

                {propsCategory.propsItems.map((propsItem, index) => (
                  <FormItem key={propsItem.key}>
                    <Radio
                      id={propsItem.key}
                      value={index}
                      name={propsCategory.key}
                      onChange={this.getChangePropHandler(propsCategory)}
                    >{propsItem.title}
                    </Radio>
                  </FormItem>
                ))}
              </div>
            ))}
          </div>
        }

        <div className="built-component__presentation">
          <Component {...componentProps} />
        </div>
      </div>
    );
  }
}
