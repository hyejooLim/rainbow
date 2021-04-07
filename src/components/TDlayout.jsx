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
  box-shadow: 1px 2px 18px -1px rgba(95, 95, 95, 1);
  -webkit-box-shadow: 1px 2px 18px -1px rgba(95, 95, 95, 1);
  -moz-box-shadow: 1px 2px 18px -1px rgba(95, 95, 95, 1);
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
