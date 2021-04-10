import React, { useState, useContext, useMemo, memo } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { TodosContext, CREATE } from '../TDcontext';

const AddBtn = styled.button`
  width: 62px;
  height: 62px;
  font-size: 42px;
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
  bottom: 70px;
  transform: translate(-50%, 50%);

  &:hover {
    cursor: pointer;
    background-color: #3de2c4;
  }

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background-color: #fb6060;
      transform: translate(-50%, 50%) rotate(45deg);
      bottom: -10px;

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
  font-size: 15px;
  outline: none; // 파란 테두리 제거
`;

const TDadd = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const { nextId, dispatch } = useContext(TodosContext);

  const onClickBtn = () => setOpen(!open);
  const onChangeInput = (e) => setValue(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    dispatch({ type: CREATE, id: nextId.current, text: value });
    nextId.current += 1;
    setValue('');
    // eslint-disable-next-line
  };

  return (
    <>
      {open && (
        <InputFormContainer>
          <InputForm onSubmit={onSubmitForm}>
            <Input
              autoFocus
              placeholder='할 일을 입력 후, ENTER를 누르세요.'
              value={value}
              onChange={onChangeInput}
            />
          </InputForm>
        </InputFormContainer>
      )}
      {useMemo(
        () => (
          <AddBtn onClick={onClickBtn} open={open}>
            <MdAdd />
            {/* eslint-disable-next-line */}
          </AddBtn>
        ),
        [open]
      )}
    </>
  );
};

export default memo(TDadd);
