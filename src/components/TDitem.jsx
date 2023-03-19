import React, { useState, useEffect, useContext, memo } from 'react';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';

import { TodosContext, EDIT, TOGGLE, REMOVE } from '../TDcontext';
import * as S from '../styles/TDitem';

const TDitem = ({ id, done, text }) => {
  const { dispatch } = useContext(TodosContext);

  const [value, setValue] = useState(text);
  const [isEditMode, setIsEditMode] = useState(false);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onClickEdit = () => {
    setIsEditMode(true);
  };

  const onCancelEdit = () => {
    setValue(text);
    setIsEditMode(false);
  };

  const onEdit = () => {
    dispatch({ type: EDIT, id, text: value });
    setIsEditMode(false);
  };

  const onToggle = () => {
    dispatch({ type: TOGGLE, id });
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
      <S.TDitemBlock>
        {isEditMode ? (
          <S.EditWrapper>
            <input type='text' value={value} onChange={onChangeValue} />
            <button class='edit' onClick={onEdit}>
              완료
            </button>
          </S.EditWrapper>
        ) : (
          <>
            <S.CheckCircle onClick={onToggle} done={done}>
              {done && <MdDone />}
              {/* eslint-disable-next-line */}
            </S.CheckCircle>
            <S.Text done={done}>{text}</S.Text>
            <S.EditButton onClick={onClickEdit}>
              <MdEdit />
            </S.EditButton>
            <S.RemoveButton onClick={onRemove}>
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
