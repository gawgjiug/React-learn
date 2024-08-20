import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const buttonProps = {
    text: '메일',
    color: 'lightcoral',
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      <Button {...buttonProps} />
      <Button text={'카페'} />
      <Button text={'블로그'}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  );
}
//js 함수가 html 태그를 반환하는 함수를 컴포넌트라고 부름
//컴포넌트는 반드시 첫글자가 대문자
//부모와 자식 컴포넌트 개념이 존재  App -> Header (게층구조)
//모듈화를 위해 컴포넌트 별로 나눠서 개발

export default App;

//자식요소로 배치된 div태그가 자동으로 children이라는 props로 전달이 됨
//props는 부모에서 자식으로만 전달이 가능함 반대의 경우는 불가능
