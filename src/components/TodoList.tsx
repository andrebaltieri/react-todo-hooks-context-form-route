import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoListItem from './TodoListItem';
import { TodoContextType } from '../contexts/TodoContextType';

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <table className="uk-table">
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                    )
                }
            </tbody>

        </table>
    )
}

export default TodoList;