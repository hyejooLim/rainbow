import React from 'react';

import TDlist from './TDlist';
import TDadd from './TDadd';
import WeatherInfo from './weatherInfo';
import { TDlayoutBlock } from '../styles/TDlayout';

const TDlayout = () => {
  return (
    <>
      <TDlayoutBlock>
        <WeatherInfo />
        <TDlist />
        <TDadd />
      </TDlayoutBlock>
    </>
  );
};

export default TDlayout;
