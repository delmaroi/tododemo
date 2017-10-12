import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import AddItem from 'components/Todo/Molecules/AddItem';
import Search from 'components/Todo/Molecules/Search';
import TodoListItem from 'components/Todo/Molecules/TodoListItem';
import ButtonBack from 'components/Todo/Atoms/ButtonBack';

export default class ToDoDetails extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
