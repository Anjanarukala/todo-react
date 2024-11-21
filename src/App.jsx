import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const data = inputRef.current?.value?.trim();
    if (!data) return;
    const todo = {
      text: data,
      id: Date.now(),
      isCompleted: false
    };
    setTodos([...todos, todo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((value) => value.id !== id));
  };

  const updateTodo = (id) => {
    const newData = prompt("Enter new todo text:");
    if (newData?.trim() === "") return;
    setTodos((prev) =>
      prev.map((value) => (value.id === id ? { ...value, text: newData } : value))
    );
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((value) =>
        value.id === id ? { ...value, isCompleted: !value.isCompleted } : value
      )
    );
  };

  return (
    <div className='h-screen w-screen bg-slate-200 flex items-center justify-center flex-col gap-y-4'>
      <div className='flex gap-x-2'>
        <input type="text" className='h-10 w-80 border-none outline-none rounded-lg px-3' ref={inputRef} />
        <button className='h-10 px-2 bg-black text-white border-none outline-none rounded-lg' onClick={addTodo}>Add</button>
      </div>
      <div className='h-96 w-96 bg-slate-400 overflow-auto'>
        {todos.map((value) => (
          <TodoList
            key={value.id}
            text={value.text}
            id={value.id}
            isCompleted={value.isCompleted}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
