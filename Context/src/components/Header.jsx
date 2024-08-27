import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

//memo 메서드는 인수로 받은 헤더 컴포넌트를 props가 변경되지 않았을 때에는 리렌더링 하지 않도록 최적화 해서 반환해줌

export default memo(Header);
