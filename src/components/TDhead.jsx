import React, { useContext, memo, useMemo } from 'react';
import { TodosContext } from '../TDcontext';
import { GiRainbowStar } from 'react-icons/gi';
import styled from 'styled-components';

const TDheadBlock = styled.header`
  border-top: 24px solid #d02424;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 1px solid #c3c3c3;
  padding: 35px 30px;

  .date {
    color: #4e4e4e;
    font-size: 25px;
    margin: 0;
  }

  .day {
    color: #cacaca;
    font-size: 17px;
  }

  .left-work {
    color: #0fd3b5;
    font-size: 18px;
    margin-top: 20px;
  }
`;

const TDhead = () => {
  const date = new Date();
  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayString = date.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  const { state } = useContext(TodosContext);
  console.log(state);
  const leftWork = state.filter((todo) => !todo.done);

  return (
    <TDheadBlock>
      <h1 className='date'>
        {dateString}
        {useMemo(() => <GiRainbowStar />, [])}
      </h1>
      <div className='day'>{dayString}</div>
      <div className='left-work'>남은 할 일: {leftWork.length}개</div>
    </TDheadBlock>
  );
};

export default memo(TDhead);
