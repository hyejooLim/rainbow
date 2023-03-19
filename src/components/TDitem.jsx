import React, { useState, useEffect, useContext, memo } from 'react';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';

import { TodosContext, EDIT, TOGGLE, REMOVE } from '../TDcontext';
import * as S from '../styles/TDitem';

const TDitem = ({ id, done, text }) => {
  const { dispatch } = useContext(TodosContext);

  const [value, setValue] = useState(text);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleEditCancel = () => {
    setValue(text);
    setIsEditMode(false);
  };

  const handleEdit = () => {
    dispatch({ type: EDIT, id, text: value });
    setIsEditMode(false);
  };

  const handleToggle = () => {
    dispatch({ type: TOGGLE, id });
  };

  const handleRemove = () => {
    dispatch({ type: REMOVE, id });
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id === 'root') {
        handleEditCancel();
      }
    });

    return () => {
      window.removeEventListener('click', handleEditCancel);
    };
  }, []);

  return (
    <>
      <S.TDitemBlock>
        {isEditMode ? (
          <S.EditWrapper>
            <input type='text' value={value} onChange={handleValueChange} />
            <button class='edit' onClick={handleEdit}>
              완료
            </button>
          </S.EditWrapper>
        ) : (
          <>
            <S.CheckCircle onClick={handleToggle} done={done}>
              {done && <MdDone />}
              {/* eslint-disable-next-line */}
            </S.CheckCircle>
            <S.Text done={done}>{text}</S.Text>
            <S.EditButton onClick={handleEditButtonClick}>
              <MdEdit />
            </S.EditButton>
            <S.RemoveButton onClick={handleRemove}>
              <MdDelete />
              {/* eslint-disable-next-line */}
            </S.RemoveButton>
          </>
        )}
      </S.TDitemBlock>
    </>
  );
};

export default memo(TDitem);
