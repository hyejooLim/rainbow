import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TDheadBlock = styled.header`
  border-top: 24px solid #d02424;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 1px solid #c3c3c3;
  padding: 35px 30px;

  .date {
    color: #4e4e4e;
    font-size: 24px;
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
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [date, setDate] = useState(0);
  const [day, setDay] = useState('');
  const [leftwork, setLeftWork] = useState(0);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDate(date.getDate());
    if (date.getDay() === 0) {
      setDay('일');
    } else if (date.getDay() === 1) {
      setDay('월');
    } else if (date.getDay() === 2) {
      setDay('화');
    } else if (date.getDay() === 3) {
      setDay('수');
    }
  }, []);

  return (
    <TDheadBlock>
      <div className='date'>
        {year}년 {month}월 {date}일
      </div>
      <div className='day'>{day}요일</div>
      <div className='left-work'>남은 할 일: {leftwork}개</div>
    </TDheadBlock>
  );
};

export default TDhead;
