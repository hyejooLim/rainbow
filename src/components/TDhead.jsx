import React, { useState, useEffect, useContext, memo } from 'react';
import { ImSun } from 'react-icons/im';
import { MdCloud } from 'react-icons/md';
import { BiCloudRain, BiCloudSnow } from 'react-icons/bi';
import { FaRainbow } from 'react-icons/fa';

import { TodosContext } from '../TDcontext';
import { TDheadBlock } from '../styles/TDhead';

const TDhead = ({ weather }) => {
  const [weatherIcon, setWeatherIcon] = useState(null);

  const date = new Date();
  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayString = date.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  const { state } = useContext(TodosContext);
  const leftWork = state.filter((todo) => !todo.done);

  useEffect(() => {
    switch (weather) {
      case 'Clear':
        setWeatherIcon(<ImSun />);
        break;
      case 'Clouds':
        setWeatherIcon(<MdCloud />);
        break;
      case 'Rain':
        setWeatherIcon(<BiCloudRain />);
        break;
      case 'Snow':
        setWeatherIcon(<BiCloudSnow />);
        break;
      default:
        setWeatherIcon(<FaRainbow />);
        break;
    }
  }, [weather]);

  return (
    <TDheadBlock>
      <h1 className='date'>
        <span>{dateString}</span>
        <span>{weatherIcon}</span>
      </h1>
      <div className='day'>{dayString}</div>
      <div className='left-work'>남은 할 일: {leftWork.length}개</div>
    </TDheadBlock>
  );
};

export default memo(TDhead);
