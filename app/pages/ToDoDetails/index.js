import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import connectWithBackend from 'redux-connect-backend';
import AddItem from 'components/Todo/Molecules/AddItem';
import Search from 'components/Todo/Molecules/Search';
import TodoListItem from 'components/Todo/Molecules/TodoListItem';
import ButtonBack from 'components/Todo/Atoms/ButtonBack';
import { getTodo as getTodoApi } from 'api/todos';

const mapApiMethodsToActions = {
  getTodo: getTodoApi,
};

@connectWithBackend(mapApiMethodsToActions)
export default class ToDoDetails extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    params: PropTypes.object.isRequired,
    getTodo: PropTypes.func.isRequired,
    getTodoResult: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const {
      todoId,
    } = this.props.match.params;

    this.props.getTodo(todoId);
  }

  render() {
    return (
      <div>
        <Helmet
          title="TODOS Details App"
          meta={[
            { name: 'description', content: 'TODOS' },
          ]}
        />
        <div className="todos" >
          <h3 className="todos__title" >title</h3>
          <ButtonBack />

          <div className="todos__inputs" >
            <AddItem />
            <Search />
          </div>

          <TodoListItem />
        </div>
      </div>
    );
  }
}
