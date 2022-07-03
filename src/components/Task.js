/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextTasks from './ContextTasks';
import ContextColumns from './ContextColums'
import ContextSetState from './ContextClickHandler';

const Task = function (props) {
    const { task:currentTask, column:currentColumn } = props;
    const tasksDataArr  = useContext(ContextTasks);
    const columnsDataArr = useContext(ContextColumns);
    const setState = useContext(ContextSetState);
    const clickNextHandler = () => {
        const nextColumnId = currentColumn.id + 1;
        const columnWithNextColumnId = columnsDataArr.filter((el) => {
            if(el.id === nextColumnId) {
                return el;
            }
        });

        const nextColumnExist = () => {
            if(columnWithNextColumnId.length > 0) {
                return true;
            }
            return false;
        }

        const arrOfTasksNextColumn = tasksDataArr.filter((el) => {
            if(nextColumnId === el.idColumn) {
                return el;
            }
        } )

        const spaceInNextColumn = () => {
            if(arrOfTasksNextColumn.length < columnWithNextColumnId[0].limit) {
                return true;
            }
            return false;
        }
       
        if(nextColumnExist()) {
            if(spaceInNextColumn()) {
                const updatedTasks = tasksDataArr.map(el => {
                    if(currentTask.id === el.id) {
                        return {...el, idColumn: el.idColumn + 1}
                    }
                    return el;
                });
                setState(updatedTasks);
            } else {
                alert('no more space in the next column!');
            }
        } 
    }

    const clickPreviousHandler = () => {
        const previousColumnId = currentColumn.id - 1;
        const columnWithPreviousColumnId = columnsDataArr.filter( (el) => {
            if(el.id === previousColumnId) {
                return el;
            }
        });

        const previousColumnExist = () => {
            if(columnWithPreviousColumnId.length > 0) {
                return true;
            }
            return false;
        };

        const arrOfTasksPreviousColumn = tasksDataArr.filter((el) => {
            if(previousColumnId === el.idColumn) {
                return el;
            }
        });

        const spaceInPreviousColumn = () => {
            if(arrOfTasksPreviousColumn.length < columnWithPreviousColumnId[0].limit) {
                return true;
            }
            return false;
        }
       
        if(previousColumnExist()) {
            if(spaceInPreviousColumn()) {
                const updatedTasks = tasksDataArr.map(el => {
                    if(currentTask.id === el.id) {
                        return {...el, idColumn: el.idColumn - 1}
                    }
                    return el;
                });
                setState(updatedTasks);
            } else {
                alert('no more space in the previous column!');
            }
        }
    }

    const removeTask = () => {
        const newTasksDataArr = tasksDataArr.filter((task) => task !== currentTask)
        setState(newTasksDataArr);
    }

    return (
        <li className='task'>
            <button type='button' className='buttonPrevious' onClick={() =>{clickPreviousHandler()}}>{'<'}</button>
            <div className='taskBody'>
                <h3>{currentTask.name}</h3>
                <p>{currentTask.user}</p>
                <button type='button' className='remove' onClick={removeTask}>x</button>
            </div>
            <button type='button' className='buttonNext' onClick={() =>{clickNextHandler()}}>{'>'}</button>
        </li>
    )
}

Task.propTypes = {
    task: PropTypes.oneOfType([PropTypes.object]).isRequired,
    column: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default Task;