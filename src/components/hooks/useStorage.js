/* eslint-disable consistent-return */

const useStorage = (defaultData) => ({
    getDataFromLocalStorage: () => {
        const data = window.localStorage.getItem('tasks')
        if(data) {
            return  JSON.parse(data)
        }
        return defaultData;
    },
    sendDataToLocalStorage: (data = defaultData) => {
        window.localStorage.setItem('tasks', JSON.stringify(data))
    }
})


export default useStorage;