import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import AddList from 'components/Todo/Molecules/AddList';
import Search from 'components/Todo/Molecules/Search';
import TodoLists from 'components/Todo/Molecules/TodoLists';
import style from './style';

export default class ToDoLists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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

          <TodoLists />
        </div>
      </div>
    );
  }
}
