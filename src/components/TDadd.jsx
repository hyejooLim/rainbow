import React, { useState, useContext, useMemo, memo } from 'react';
import { MdAdd } from 'react-icons/md';
import shortid from 'shortid';

import { TodosContext, CREATE } from '../TDcontext';
import * as S from '../styles/TDadd';

const TDadd = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const { dispatch } = useContext(TodosContext);

  const onClickBtn = () => setOpen(!open);
  const onChangeInput = (e) => setValue(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    dispatch({ type: CREATE, id: shortid.generate(), text: value });
    setValue('');
    // eslint-disable-next-line
  };

  return (
    <>
      {open && (
        <S.InputFormContainer>
          <S.InputForm onSubmit={onSubmitForm}>
            <S.Input
              autoFocus
              placeholder='할 일을 입력 후, ENTER를 누르세요.'
              value={value}
              onChange={onChangeInput}
            />
          </S.InputForm>
        </S.InputFormContainer>
      )}
      {useMemo(
        () => (
          <S.AddBtn onClick={onClickBtn} open={open}>
            <MdAdd />
            {/* eslint-disable-next-line */}
          </S.AddBtn>
        ),
        [open]
      )}
    </>
  );
};

export default memo(TDadd);
