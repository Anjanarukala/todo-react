import React from 'react';

const TodoList = ({ text, id, deleteTodo, updateTodo, isCompleted, toggleCompleted }) => {
  return (
    <div 
      className={`h-10 w-96 flex gap-x-2 items-center ${isCompleted ? 'bg-green-300 line-through' : 'bg-white'}`}
      onClick={() => toggleCompleted(id)}
    >
      <input 
        type='text' 
        className={`h-7 w-60 border-none outline-none rounded-lg px-3 ${isCompleted ? 'line-through text-gray-500' : ''}`} 
        value={text} 
        readOnly 
      />
      <button 
        className='h-7 px-1 border-none outline-none rounded-lg bg-slate-800 text-white'
        onClick={(e) => { e.stopPropagation(); updateTodo(id); }}
      >
        Update
      </button>
      <button 
        className='h-7 px-1 border-none outline-none rounded-lg bg-slate-800 text-white'
        onClick={(e) => { e.stopPropagation(); deleteTodo(id); }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoList;
