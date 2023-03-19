import React, { useContext, memo } from 'react';

import TDitem from './TDitem';
import { TodosContext } from '../TDcontext';
import { TDlistBlock } from '../styles/TDlist';

const TDlist = () => {
  const { state } = useContext(TodosContext);

  return (
    <TDlistBlock>
      {state.map((todo) => (
        <TDitem key={todo.id} id={todo.id} text={todo.text} done={todo.done}></TDitem>
      ))}
    </TDlistBlock>
  );
};

export default memo(TDlist);
