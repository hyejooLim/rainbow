import React, { useState, useEffect, useContext, memo } from 'react';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import styled, { css } from 'styled-components';

import { TodosContext, EDIT, TOGGLE, REMOVE } from '../TDcontext';

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  input {
    width: 75%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #aaa;
    outline: none;
  }

  button.edit {
    width: 42px;
    height: 32px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #ffcc00;
    transition: background-color 0.5s;

    &:hover {
      cursor: pointer;
      background-color: #ffdd33;
    }
  }
`;

const Edit = styled.div`
  cursor: pointer;
  color: #7ba4f6;
  font-size: 20px;
  margin-right: 8px;
  visibility: hidden;

  &:hover {
    color: #2269f7;
  }
`;

const Remove = styled.div`
  cursor: pointer;
  color: #c8c8c8;
  font-size: 20px;
  visibility: hidden;

  &:hover {
    color: #fb6060;
  }
`;

const TDitemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  font-size: 16px;

  &:hover {
    ${Remove}, ${Edit} {
      visibility: visible;
    }
  }
`;

const CheckCircle = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #bcbcbc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #0fd3b5;
      color: #0fd3b5;
    `}
`;

const Text = styled.div`
  flex: 1;

  ${(props) =>
    props.done &&
    css`
      color: #d4d7da;
    `}
`;

const TDitem = ({ id, done, text }) => {
  const { dispatch } = useContext(TodosContext);

  const [value, setValue] = useState(text);
  const [isEditMode, setIsEditMode] = useState(false);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onEdit = () => {
    dispatch({ type: EDIT, id, text: value });
    setIsEditMode(false);
  };

  const onCancelEdit = () => {
    setValue(text);
    setIsEditMode(false);
  };

  const onToggle = () => {
    dispatch({ type: TOGGLE, id });
  };

  const onClickEdit = () => {
    setIsEditMode(true);
  };

  const onRemove = () => {
    dispatch({ type: REMOVE, id });
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id === 'root') {
        onCancelEdit();
      }
    });

    return () => {
      window.removeEventListener('click', onCancelEdit);
    };
  }, []);

  return (
    <>
      <TDitemBlock>
        {isEditMode ? (
          <EditWrapper>
            <input type='text' value={value} onChange={onChangeValue} />
            <button class='edit' onClick={onEdit}>
              완료
            </button>
          </EditWrapper>
        ) : (
          <>
            <CheckCircle onClick={onToggle} done={done}>
              {done && <MdDone />}
              {/* eslint-disable-next-line */}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Edit onClick={onClickEdit}>
              <MdEdit />
            </Edit>
            <Remove onClick={onRemove}>
              <MdDelete />
              {/* eslint-disable-next-line */}
            </Remove>
          </>
        )}
      </TDitemBlock>
    </>
  );
};

export default memo(TDitem);
