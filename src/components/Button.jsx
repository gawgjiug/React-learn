const Button = ({ text, color = 'black', children }) => {
  console.log(text, color, children);
  return (
    <button style={{ color: color }}>
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
