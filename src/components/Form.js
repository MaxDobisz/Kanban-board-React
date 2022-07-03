/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useContext} from 'react';
import ContextClickHandler from './ContextClickHandler';
import ContextTasks from './ContextTasks';

const Form = function () {
    const setState = useContext(ContextClickHandler)
    const tasksDataArr = useContext(ContextTasks);
    const clearInputs = (e) => {
        e.target.elements.taskName.value = '';
        e.target.employeeName.value = '';
    }

    const addTask = (e) => {
        e.preventDefault();
        const newTaskName = e.target.elements.taskName.value;
        const newTaskEmployeeName = e.target.employeeName.value;
        
        if(newTaskName && newTaskEmployeeName) {
            if(tasksDataArr.length > 0) {
                const lastTasksElement = tasksDataArr[tasksDataArr.length - 1];
                const lastTaskElementId = lastTasksElement.id;
                const newTaskId = lastTaskElementId + 1;
                const newTask = {id: newTaskId, name: newTaskName, idColumn: 1, user: newTaskEmployeeName};
                const newTasksArr = [...tasksDataArr, newTask] ;
                setState(newTasksArr);
            } else {
                const newTask = {id: 1, name: newTaskName, idColumn: 1, user: newTaskEmployeeName};
                const newTasksArr = [newTask];
                setState(newTasksArr);
            }
            clearInputs(e);
        } else {
            alert('Provide all necessary information!');
        }
    }

    return (
        <form onSubmit={addTask}>
            <h3 className='addTask'>ADD TASK</h3>
            <div className='inputWrapper'>
                <label htmlFor='taskName'>Task name</label>
                <input id='taskName' name='taskName'/>
            </div>
            <div className='inputWrapper'>
                <label htmlFor='employeeName'>Employee name</label>
                <input id='employeeName' name='employeeName'/>
            </div>
            <input  className='submit' type='submit' value='submit' />
        </form>
    )
}

export default Form;