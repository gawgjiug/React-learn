import './App.css';
import { useState, useRef, useReducer, useCallback } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import TodoItem from './components/TodoItem';
import Exam from './components/Exam';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '운동',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    //todos State의 값들 중에 id와 일치하는 id를 갖는 투두아이템의 isDone 변경
    //action 함수
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  //useCallback : mount 될 때에만 이 함수를 생성하고 그 뒤에는 아무리 리렌더링이 발생한다고 해도 이 함수를 새롭게 생성하지 않게 됨

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
