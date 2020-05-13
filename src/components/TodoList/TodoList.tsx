import React from 'react';
import { ITodo } from '../../interfaces';

interface TodoListProps {
	todos: ITodo[];
	onRemove(id: number): void;
	onToggle(id: number): void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
	const { todos, onRemove, onToggle }: TodoListProps = props;

	if (todos.length === 0) {
		return <p className='center'>Пока дел нет!</p>;
	}   

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        onRemove(id)
    } 

	return (
		<div className='row'>
			<ul className='col s12'>
				{todos.map((todo) => (
					<li className={`todo ${todo.completed ? 'completed' : ''}`} key={todo.id}>
						<label>
							<input checked={todo.completed}  onChange={onToggle.bind(null, todo.id)} type='checkbox' />
							<span>{todo.title}</span>
							<i onClick={e => removeHandler(e, todo.id)} className='material-icons red-text'>delete</i>
						</label>
					</li>
				))}
				<li></li>
			</ul>
		</div>
	);
};

export default TodoList;
