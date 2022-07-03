import React, { useState, useEffect } from 'react';
import Column from './Column';
import Form from './Form';
import ContextTasks from './ContextTasks';
import ContextClickHandler from './ContextClickHandler';
import ContextColumns from './ContextColums';
import useStorage from './hooks/useStorage';

const Board = function () {
    const {Provider: ProviderTasks} = ContextTasks;
    const {Provider: ProviderColumns} = ContextColumns;
    const {Provider: ProviderClickHandler} = ContextClickHandler;
    const [tasks, setTasks] = useState([
        {id: 1, name: 'Task 1', idColumn: 1, user: 'Anna'},
        {id: 2, name: 'Task 2', idColumn: 1, user: 'Mark'},
        {id: 3, name: 'Task 3', idColumn: 1, user: 'Angus'},
        {id: 4, name: 'Task 4', idColumn: 1, user: 'Zoe'},
        {id: 5, name: 'Task 5', idColumn: 1, user: 'Rick'},
        {id: 6, name: 'Task 6', idColumn: 1, user: 'Charlie'},
        {id: 7, name: 'Task 7', idColumn: 1, user: 'Tom'},
    ]);
    
    const {getDataFromLocalStorage, sendDataToLocalStorage} = useStorage(tasks);

    useEffect( () => {
        setTasks(getDataFromLocalStorage)
    }, []);

    useEffect( () => {
        sendDataToLocalStorage(tasks)
    });

    const columns = [
        {id: 1, name: 'PENDING', limit: 10},
        {id: 2, name: 'ANALYSIS', limit: 5},
        {id: 3, name: 'DEVELOPMENT', limit: 3},
        {id: 4, name: 'TEST', limit: 3},
        {id: 5, name: 'DEPLOY', limit: 6},
    ];

    const renderColums = () => columns.map((column) => (
        <ProviderColumns value={columns} key={column.name}>
            <Column column={column} /> 
        </ProviderColumns>
    ));

    return (
        <ProviderTasks value={tasks}>
            <ProviderClickHandler value={setTasks}>
                <div className='board'>
                    {renderColums()}
                </div>
                <Form />
            </ProviderClickHandler>
        </ProviderTasks>
    );
};

export default Board;