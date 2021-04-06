import React from 'react';
import styled from 'styled-components';
import TDitem from './TDitem';

const TDlistBlock = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const TDlist = () => {
  return (
    <TDlistBlock>
      <TDitem text='투두리스트 만들기' done={true} />
      <TDitem text='임베디드컴퓨팅 수업듣기' done={false} />
      <TDitem text='자소서 작성하기' done={true} />
    </TDlistBlock>
  )
};

export default TDlist;