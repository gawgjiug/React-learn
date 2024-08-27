import { useReducer } from 'react';
//reducer : 변환기
function reducer(state, action) {
  console.log(state, action);
  if (action.type === 'INCREASE') {
    return state + action.data;
  } else if (action.type === 'DECREASE') {
    return state + action.data;
  }
}

const Exam = () => {
  //dispatch : 발송하다 , 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는 ,발송하는 함수
  //2번째 인수로는 state의 초기값을 전달할 수 있음
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
    //인수 :상태가 어떻게 변화되길 원하는지 정보를 전달
    // -> 액션객체
  };
  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: -1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
