import styled from 'styled-components';

export const TDheadBlock = styled.header`
  border-top: 24px solid #d02424;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 1px solid #c3c3c3;
  padding: 35px 30px;

  .date {
    color: #4e4e4e;
    font-size: 25px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
