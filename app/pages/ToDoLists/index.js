import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import connectWithBackend from 'redux-connect-backend';
import AddList from 'components/Todo/Molecules/AddList';
import Search from 'components/Todo/Molecules/Search';
import TodoLists from 'components/Todo/Molecules/TodoLists';
import { getTodoLists as getTodoListsApi } from 'api/todo';
import style from './style';

const mapApiMethodsToActions = {
  getTodoLists: getTodoListsApi,
};

@connectWithBackend(mapApiMethodsToActions)
export default class ToDoLists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    getTodoLists: PropTypes.func.isRequired,
    getTodoListsResult: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const {
      getTodoLists,
    } = this.props;

    getTodoLists();
  }

  renderTodoLists() {
    const {
      getTodoListsResult,
    } = this.props;

    if(!getTodoListsResult.data || getTodoListsResult.data.processing) {
      return <p className="empty">List is empty</p>;
    }

    return <TodoLists results={getTodoListsResult.data} />;
  }

  render() {
    return (
      <div>
        <Helmet
          title="TODOS App"
          meta={[
            { name: 'description', content: 'TODOS' },
          ]}
        />
        <div style={style.todos} >
          <h3 style={style.todos__title} >TODO list</h3>

          <div className="todos__inputs" >
            <AddList />
            <Search />
          </div>

          {this.renderTodoLists()}
        </div>
      </div>
    );
  }
}
