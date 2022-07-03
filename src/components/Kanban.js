import React, { useState, useEffect, useRef } from 'react';
import Column from './Column';
import Form from './Form';
import ContextTasks from './ContextTasks';
import ContextClickHandler from './ContextClickHandler';
import ContextColumns from './ContextColums';
import useStorage from './hooks/useStorage';
import tasksDefault from './tasksDefault';
import columnsData from './columnsData';

const Kanban = function () {
    const {Provider: ProviderTasks} = ContextTasks;
    const {Provider: ProviderColumns} = ContextColumns;
    const {Provider: ProviderClickHandler} = ContextClickHandler;
    const [tasks, setTasks] = useState(tasksDefault);
    const {getDataFromLocalStorage, sendDataToLocalStorage} = useStorage(tasks);

    useEffect( () => {
        setTasks(getDataFromLocalStorage);
    }, []);

    useEffect( () => {
        sendDataToLocalStorage(tasks);
    });

    const buttonRef = useRef(null);

    const scrollToBottom = () => {
        window.scrollTo(0,document.body.scrollHeight);
    } 

    const renderColums = () => columnsData.map((column) => (
        <ProviderColumns value={columnsData} key={column.name}>
            <Column column={column} /> 
        </ProviderColumns>
    ));
    
    return (
        <ProviderTasks value={tasks}>
            <ProviderClickHandler value={setTasks}>
                <button type='button' className='addTaskButton' onClick={scrollToBottom}>ADD TASK</button>
                <div ref={buttonRef} className='kanban'>
                    {renderColums()}
                </div>
                <Form />
            </ProviderClickHandler>
        </ProviderTasks>
    );
};

export default Kanban;