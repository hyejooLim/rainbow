import React, { useContext, memo, useMemo } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { TodosContext, TOGGLE, REMOVE } from '../TDcontext';
import styled, { css } from 'styled-components';

const Remove = styled.div`
  cursor: pointer;
  color: #c8c8c8;
  font-size: 20px;

  &:hover {
    color: #fb6060;
  }
  visibility: hidden;
`;

const TDitemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  font-size: 16px;

  &:hover {
    ${Remove} {
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

  const onToggle = () => {
    console.log(id);
    dispatch({ type: TOGGLE, id });
  };

  const onRemove = () => {
    dispatch({ type: REMOVE, id });
  };

  // eslint-disable-next-line
  return (
    <TDitemBlock>
      {useMemo(() => <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCircle>, [done])}
      <Text done={done}>{text}</Text>
      {useMemo(() => <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>, [])}
    </TDitemBlock>
  );
};

export default memo(TDitem);
