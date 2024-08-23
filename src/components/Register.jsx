//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

//name state와 setName이라는 함수 만들고 초기값 빈 문자열
//사용자가 텍스트를 입력하면 입력된 텍스트를 name state에 저장
//최종적으로 name state에 입력한 값이 보관이 될 것임

import { useState } from 'react';
const Register = () => {
  const [input, setInput] = useState({
    name: '',
    date: '',
    country: '',
    bio: '',
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      //프로퍼티의 키 자리에 대괄호 열고 변수 이름을 씀
    });
  };

  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register;
