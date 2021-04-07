import React, { useContext, memo } from 'react';
import TDitem from './TDitem';
import { TodosContext } from '../TDcontext';
import styled from 'styled-components';

const TDlistBlock = styled.div`
  flex: 1; // 차지할 수 있는 영역 모두 차지 (부모 컴포넌트도 flex box이어야 함)
  padding: 20px 30px;
  overflow-y: auto;
`;

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
