import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const TDaddBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const AddIcon = styled.button`
  width: 65px;
  height: 65px;
  font-size: 32px;
  background-color: #0FD3B5;
  color: white;
  border-radius: 50%;
  border-style: none;
  text-align: center;
`;

const TDadd = () => {
  const [value, setValue] = useState('');
  const input = useRef(false);

  const onClickBtn = (e) => {
    e.preventDefault();
    input.current = true;
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <TDaddBlock onClick={onClickBtn}>
      <AddIcon>
        <i class='fas fa-plus'></i>
      </AddIcon>
      {input.current && <input value={value} onChange={onChangeInput}></input>}
    </TDaddBlock>
  );
};

export default TDadd;
