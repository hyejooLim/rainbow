import React, { useEffect, useReducer, createContext, useMemo } from 'react';
import { TODOS_KEY } from './config';

// context api
export const TodosContext = createContext({
  state: {},
  dispatch: () => {},
});

export const LOAD = 'LOAD';
export const EDIT = 'EDIT';
export const CREATE = 'CREATE';
export const TOGGLE = 'TOGGLE';
export const REMOVE = 'REMOVE';

// action에 따라 state 변경
const reducer = (state, action) => {
  switch (action.type) {
    case LOAD:
      return (state = action.data);
    case CREATE:
      const newTodo = { id: action.id, text: action.text, done: false };
      const todos = state.concat(newTodo);
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

      return state.concat(newTodo);
    case EDIT:
      const updatedTodos = state.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
      localStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));

      return (state = updatedTodos);
    case TOGGLE:
      const toggledTodos = state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
      localStorage.setItem(TODOS_KEY, JSON.stringify(toggledTodos));

      return (state = toggledTodos);
    case REMOVE:
      const removedTodos = state.filter((todo) => todo.id !== action.id);
      localStorage.setItem(TODOS_KEY, JSON.stringify(removedTodos));

      return (state = removedTodos);
    default:
      throw new Error('not invalid');
  }
};

const initialTodos = [];

const TDcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);

  useEffect(() => {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos) {
      dispatch({ type: LOAD, data: JSON.parse(savedTodos) });
    }
  }, []);

  // value 값이 바뀔 때마다 컴포넌트가 재렌더링되는 것 방지
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <>
      <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
    </>
  );
};

export default TDcontext;
