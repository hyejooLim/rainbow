import React, { useReducer, useRef, createContext, useMemo } from 'react';

// context api
export const TodosContext = createContext({
  state: {},
  dispatch: () => {},
  nextId: 0,
});

export const CREATE = 'CREATE';
export const TOGGLE = 'TOGGLE';
export const REMOVE = 'REMOVE';

// action에 따라 state 변경
const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat({
        id: action.id,
        text: action.text,
        done: false,
      });
    case TOGGLE: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    }
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error('not invalid');
  }
};

const initialTodos = [];

const TDcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const nextId = useRef(0);

  const value = useMemo(() => ({ state, nextId, dispatch }), [state, nextId]);

  return (
    <>
      <TodosContext.Provider value={value}>
        {children} 
      </TodosContext.Provider>
    </>
  );
};

export default TDcontext;
