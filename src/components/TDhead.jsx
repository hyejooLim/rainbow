import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TDheadBlock = styled.header`
  border-top: 24px solid #D02424;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 1px solid #c3c3c3;

  * {
    margin-left: 40px;
  }
`;

const TDdate = styled.div`
  color: #4e4e4e;
  margin-top: 30px;
  font-size: 24px;
`;

const Day = styled.div`
  color: #cacaca;
  font-size: 18px;
`;

const LeftWork = styled.div`
  color: #0FD3B5;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 24px;
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
      <TDdate>
        {year}년 {month}월 {date}일
      </TDdate>
      <Day>{day}요일</Day>
      <LeftWork>남은 할 일: {leftwork}개</LeftWork>
    </TDheadBlock>
  );
};

export default TDhead;
