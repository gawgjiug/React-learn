import './Main.css';

const Main = () => {
  const user = {
    name: '곽지욱',
    isLogin: true,
  };

  // return <main>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</main>;
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;

//JSX 주의 사항
/**1. 중괄호 내부에는 JS 표현식만 넣을 수 있다
 * 값,변수,삼항연산자
 * if,for문은 값으로서 평가될 수 없기 때문에 사용불가
 *
 * 2. 숫자, 문자열,배열 값만 렌더링된다.
 * null,undefined, true of false, 객체 등등은 안됨
 *
 * 3. 모든 태그는 닫혀있어야 한다.
 *
 * 4. 최상위 태그는 반드시 하나여야만 한다 마땅한 태그가 없으면 그냥 빈태그로 선언해도됨
 *
 */
