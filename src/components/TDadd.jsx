import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const AddBtn = styled.button`
  width: 60px;
  height: 60px;
  font-size: 40px;
  background-color: #0fd3b5;
  color: white;
  border-radius: 50%;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  &:hover {
    cursor: pointer;
    background-color: #3de2c4;
  }

  transition: 0.125s all ease-in;
  ${(props) =>
    props.click &&
    css`
      background-color: #fb6060;
      transform: translate(-50%, 50%) rotate(45deg);

      &:hover {
        background-color: #fa9595;
      }
    `}
`;

const InputFormContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

const InputForm = styled.form`
  background: #f8f9fa;
  padding: 30px 50px 45px 22px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #dee2e6;
  font-size: 18px;
  outline: none; // 파란 테두리 제거
`;

const TDadd = () => {
  const [click, setClick] = useState(false);

  const onClickBtn = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  return (
    <>
      {click && (
        <InputFormContainer>
          <InputForm>
            <Input autoFocus placeholder='할 일을 입력 후, ENTER를 누르세요.' />
          </InputForm>
        </InputFormContainer>
      )}
      <AddBtn onClick={onClickBtn} click={click}>
        <MdAdd />
      </AddBtn>
    </>
  );
};

export default TDadd;
