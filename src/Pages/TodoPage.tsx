import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import { ITodo } from '../interfaces';
import TodoList from '../components/TodoList/TodoList';

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);  
    
    
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]' ) as ITodo[] 
        setTodos(savedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))        
    }, [todos])


	const addTodosHandler = (title: string) => {
		const newTodo: ITodo = {
			title,
			id: Date.now(),
			completed: false,
		};
		setTodos((prev) => [newTodo, ...prev]);
	};

	const toggleHandler = (id: number) => {		

		setTodos(prev => prev.map(todo=>{
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))	
	};

	const removeHandler = (id: number) => {             
		setTodos((prev) => {            
            return prev.filter((todo) => todo.id !== id);
            
        })       
        
	};

	return (
		<>            
			<TodoForm onAdd={addTodosHandler} />
			<TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
		</>
	);
};

export default TodoPage;
