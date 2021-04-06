import React from 'react';
import styled from 'styled-components';
import TDhead from './TDhead';
import TDlist from './TDlist';
import TDadd from './TDadd';

const TDlayoutBlock = styled.div`
  width: 390px;
  height: 620px;
  position: relative;
  margin: auto;
  margin-top: 40px;
  background-color: white;
  border-radius: 15px;
  border-bottom: 24px solid #8916ED;
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
