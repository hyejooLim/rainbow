import styled, { css } from 'styled-components';

export const EditWrapper = styled.div`
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
  }

  button.edit {
    width: 42px;
    height: 32px;
    border-radius: 4px;
    color: #fff;
    background-color: #ffcc00;
    transition: background-color 0.5s;

    &:hover {
      background-color: #ffdd33;
    }
  }
`;

export const Edit = styled.button`
  color: #7ba4f6;
  font-size: 20px;
  visibility: hidden;

  &:hover {
    color: #2269f7;
  }
`;

export const Remove = styled.button`
  color: #c8c8c8;
  font-size: 20px;
  visibility: hidden;

  &:hover {
    color: #fb6060;
  }
`;

export const TDitemBlock = styled.div`
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

export const CheckCircle = styled.div`
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

export const Text = styled.div`
  flex: 1;

  ${(props) =>
    props.done &&
    css`
      color: #d4d7da;
    `}
`;
