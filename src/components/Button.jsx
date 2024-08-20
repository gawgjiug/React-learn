const Button = ({ text, color = 'black', children }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  // 마우스 엔터 이벤트 핸들러
  const onMouseEnter = (e) => {
    e.target.style.backgroundColor = 'lightgreen';
  };

  // 마우스가 버튼을 떠날 때 배경색을 원래대로 돌리는 핸들러
  const onMouseLeave = (e) => {
    e.target.style.backgroundColor = '';
  };

  console.log(text, color, children);
  return (
    <button
      onClick={onClickButton}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;

// Button.defaultProps = {
//   color: 'black',
// };
// //props에서 받아온 color가 없을 경우에 기본값을 미리 설정해두면 에러 방지
