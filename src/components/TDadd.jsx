import React, { useState, useContext, useMemo, memo } from 'react';
import { MdAdd } from 'react-icons/md';
import shortid from 'shortid';
import JSConfetti from 'js-confetti';

import { TodosContext, CREATE } from '../TDcontext';
import * as S from '../styles/TDadd';

const jsConfetti = new JSConfetti();

const TDadd = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const { state, dispatch } = useContext(TodosContext);

  const handleChangeInput = (e) => setValue(e.target.value);
  const handleAddButtonClick = () => {
    if (open) {
      setValue('');
    }

    setOpen(!open);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (value === '') {
      return;
    }

    dispatch({ type: CREATE, id: shortid.generate(), text: value });
    setValue('');

    if (state.length === 0) {
      jsConfetti.addConfetti({
        emojiSize: 60,
        confettiNumber: 400,
      });
    }
    // eslint-disable-next-line
  };

  return (
    <>
      {open && (
        <S.InputFormContainer>
          <S.InputForm onSubmit={handleSubmitForm}>
            <S.Input
              autoFocus
              placeholder='할 일을 입력 후, ENTER를 누르세요.'
              value={value}
              onChange={handleChangeInput}
            />
          </S.InputForm>
        </S.InputFormContainer>
      )}
      {useMemo(
        () => (
          <S.AddButton onClick={handleAddButtonClick} open={open}>
            <MdAdd />
            {/* eslint-disable-next-line */}
          </S.AddButton>
        ),
        [open]
      )}
    </>
  );
};

export default memo(TDadd);
