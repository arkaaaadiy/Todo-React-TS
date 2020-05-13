import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {


	const [todo, setTodo] = useState<string>('');

	const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
    };
    
    const onKeyHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && todo !== '') {
            onAdd(todo)
            setTodo('')
        }
    }

	return (
		<div>
			<div className='row'>
				<div className='input-field col s12'>
					<input
						id='todo'
						value={todo}
						onChange={changeHanlder}
						type='text'                        
                        onKeyPress={onKeyHandler}
						placeholder='Введите название вашей задачи'
					/>
				</div>
			</div>
		</div>
	);
};

export default TodoForm;
