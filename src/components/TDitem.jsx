import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

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
  padding: 18px 30px 0 30px;
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
  flex: 1; // 차지할 수 있는 영역 모두 차지

  ${(props) =>
    props.done &&
    css`
      color: #d4d7da;
    `}
`;

const TDitem = ({ id, done, text }) => {
  return (
    <TDitemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>{' '}
      {/* done=true이면 체크표시 */}
      <Text done={done}>{text}</Text> {/* done=true이면 글자색 연하게 */}
      <Remove>
        <MdDelete />
      </Remove>
    </TDitemBlock>
  );
};

export default TDitem;
