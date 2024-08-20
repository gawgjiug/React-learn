import './App.css';
import { useState } from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;

//컴포넌트의 state 값이 바뀌면 컴포넌트는 return을 다시함 그래서 다시 리랜더링함.
//리액트 컴포넌트는 state 값이 변경되어야지만 리랜더링이 되기 때문에 일반 변수를 사용하지 않는 것
//Bulb 컴포넌트에 light값을 보내줌

/**
 * 1. 자신의 state 값이 변경되었을 때,
 * 2. 자신의 props 값이 변경되었을 때
 * 3. 부모컴포넌트가 리랜더링 되면 자식 컴포넌트도 리랜더링 됨 : + 버튼을 누르면 Bulb 컴포넌트가 리랜더링 되는 이유
 * count state가 App 컴포넌트에서 리랜더링 되면 App 컴포넌트의 자식 컴포넌트인 Bulb는 리랜더링이 발생함
 * 이런 의미없는 리랜더링인 성능저하를 초래하고, 방지하기 위해 컴포넌트를 분리해주는 것이 좋음
 */
