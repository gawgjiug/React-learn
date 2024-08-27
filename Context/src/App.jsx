import './App.css';
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from 'react';
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
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

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;

//provider 아래있는 모든 컴포는트들은 TodoContext의 데이터를 공급받을 수 있게 된다. value라는 prop으로 공급할 데이터를 전달해줌
//provider 컴포넌트의 모든 자식 혹은 모든 자손 컴포넌트 들은 value props로 우리가 설정한 이 컨텍스트가 공급하는 값들을 다이렉트로 꺼내와서 언제든지 사용할 수 있음
