import styled, { css } from 'styled-components';

export const AddBtn = styled.button`
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
  position: absolute;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in;

  &:hover {
    background-color: #3de2c4;
  }

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

export const InputFormContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

export const InputForm = styled.form`
  background: #f8f9fa;
  padding: 30px 50px 45px 22px;
  border-top: 1px solid #e9ecef;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #dee2e6;
  font-size: 15px;
`;
