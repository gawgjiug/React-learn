//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

//name state와 setName이라는 함수 만들고 초기값 빈 문자열
//사용자가 텍스트를 입력하면 입력된 텍스트를 name state에 저장
//최종적으로 name state에 입력한 값이 보관이 될 것임

import { useState, useRef } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    date: '',
    country: '',
    bio: '',
  });

  const countRef = useRef(0);
  //useRef는 useState와 같이 값을 저장하는 변수로 사용되지만 state처럼 값이 변경될 때마다 리랜더링이 발생하지는 않는다.
  //js 변수를 사용할 수도 있으나, js 변수는 리랜더링 되면 계속초기화 되고, useRef를 사용하면 리랜더링이 되더라도 값을 계속 저장하기 때문임
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      //프로퍼티의 키 자리에 대괄호 열고 변수 이름을 씀
    });
  };

  const onSubmit = (e) => {
    if (input.name === '') {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={'이름'}
        />
      </div>

      <div>
        <input
          name="date"
          value={input.date}
          type="date"
          onChange={onChange}
        ></input>
      </div>
      <div>
        <select name="country" onChange={onChange} value={input.country}>
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
