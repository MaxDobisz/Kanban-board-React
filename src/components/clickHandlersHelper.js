/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
const nextColumnExist = (columnWithNextColumnId) => {
    if(columnWithNextColumnId.length > 0) {
        return true;
    }
    return false;
}

const previousColumnExist = (columnWithPreviousColumnId) => {
    if(columnWithPreviousColumnId.length > 0) {
        return true;
    }
    return false;
}

const spaceInNextColumn = (arrOfTasksNextColumn, columnWithNextColumnId) => {
    if(arrOfTasksNextColumn.length < columnWithNextColumnId[0].limit) {
        return true;
    }
    return false;
}

const spaceInPreviousColumn = (arrOfTasksPreviousColumn, columnWithPreviousColumnId) => {
    if(arrOfTasksPreviousColumn.length < columnWithPreviousColumnId[0].limit) {
        return true;
    }
    return false;
}

export {nextColumnExist, previousColumnExist, spaceInNextColumn, spaceInPreviousColumn};