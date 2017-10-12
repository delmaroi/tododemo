import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import Add from 'components/Todo/Molecules/Add';
import Search from 'components/Todo/Molecules/Search';
import Lists from 'components/Todo/Molecules/Lists';
import ButtonBack from 'components/Todo/Atoms/ButtonBack';
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
          <ButtonBack />

          <div className="todos__inputs" >
            <Add />
            <Search />
          </div>

          <Lists />
        </div>
      </div>
    );
  }
}
