import { combineReducers } from 'redux'
import GetToDoListRed from './src/Components/ToDoList/Reducer/GetToDoListRed'
import UpdateTodoRed from './src/Components/ToDoList/Reducer/UpdateTodoRed'
import DeleteTaskRed from './src/Components/ToDoList/Reducer/DeleteTaskRed'

import AddToDoRed from './src/Components/AddNewTask/reducers/AddToDoRed'


const rootReducer = combineReducers({
    GetToDoListRed,
    AddToDoRed,
    UpdateTodoRed,
    DeleteTaskRed,
    
})

export default rootReducer