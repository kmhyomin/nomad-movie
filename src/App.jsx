import { use, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(false);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === '') {
      return;
    }

    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo('');
    console.log(todos);
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
    console.log('HANDLE EVENT', event.target.checked);
  };

  return (
    <>
      <h1>My to dos ({todos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="할 일을 적으세욧!"
          onChange={onChange}
        />
        <button>할 일 적기 완료</button>
      </form>
      <hr />

      <ul>
        {todos.map((item, i) => (
          <li key={i}>
            {item}
            {/* <input type="checkbox" onChange={handleChecked} checked={checked} /> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
