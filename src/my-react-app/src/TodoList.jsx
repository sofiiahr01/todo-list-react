import { useState } from 'react';
import './App.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputTodo, setInputTodo] = useState('');


    const handleChange = (e) => {
        setInputTodo(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputTodo, completed: false }]);
            setInputTodo('');
        }
    };


    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputTodo}
                    onChange={handleChange}
                    placeholder="Enter a todo"
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoList;
