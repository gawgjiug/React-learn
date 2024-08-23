//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개
import { useState } from 'react';
const Register = () => {
  const [name, setName] = useState('이름');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  //name state와 setName이라는 함수 만들고 초기값 빈 문자열
  //사용자가 텍스트를 입력하면 입력된 텍스트를 name state에 저장
  const onChangeName = (e) => {
    setName(e.target.value);
    //최종적으로 name state에 입력한 값이 보관이 될 것임
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);
  };

  const onChangeBio = (e) => {
    console.log(e.target.value);
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={'이름'} />
      </div>

      <div>
        <input value={date} type="date" onChange={onChangeDate}></input>
      </div>
      <div>
        <select onChange={onChangeCountry} value={country}>
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
