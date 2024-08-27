import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterdTodos = getFilteredDate();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalzedData 호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } = getAnalzedDaate();

  return (
    <div className="List">
      <h4>Todo List🧩</h4>
      <div>total : {totalCount}</div>
      <div>done : {doneCount}</div>
      <div>not Done : {notDoneCount}</div>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요🔍"
      />
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
