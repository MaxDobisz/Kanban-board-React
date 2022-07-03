/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextTasks from './ContextTasks';
import Task from './Task';

const Column = function (props) {
    const { column } = props;
    const tasks = useContext(ContextTasks);
    const renderTasks = () => tasks.map((task) => {
        if(column.id === task.idColumn) {
            return <Task task={task} column={column} key={task.name}/>
        }
    });

    return (
        <ul className='column'>
            <h2 className='taskTitle'>{column.name} ({column.limit})</h2>
            {renderTasks()}
        </ul>
    );
};

Column.propTypes = {
    column: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default Column;
