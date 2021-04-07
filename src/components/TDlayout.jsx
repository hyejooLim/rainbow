import React from 'react';
import styled from 'styled-components';
import TDhead from './TDhead';
import TDlist from './TDlist';
import TDadd from './TDadd';

const TDlayoutBlock = styled.div`
  width: 375px;
  height: 590px;
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  background-color: white;
  border-radius: 15px;
  border-bottom: 24px solid #8916ed;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
`;

const TDlayout = () => {
  return (
    <>
      <TDlayoutBlock>
        <TDhead />
        <TDlist />
        <TDadd />
      </TDlayoutBlock>
    </>
  );
};

export default TDlayout;
