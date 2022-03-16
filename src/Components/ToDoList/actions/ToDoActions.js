import * as All_Actions from '../../../Utility/ActionsConstants'
import axios from 'axios'


// Get all todo list

export const getYourToDoList = (api, params) => {

    debugger
   
    return (dispatch, getState) => {

        debugger
        dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.GET_TODOLIST_START})

        axios.get(api).then((responseJson) => {
            dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.GET_TODOLIST_SUCCESS, payload: responseJson.data })
            debugger
            return console.log(responseJson)
        })
            .catch((error) => {
                dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.GET_TODOLIST_FAILURE, payload: error })
                console.error(error);
            });
    }
}


// Update todo list
export const editTask = (api, params) => {

    debugger
   
    return (dispatch, getState) => {

        debugger
        dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.UPDATE_NEWTODO_START})

        axios.put(api,params).then((responseJson) => {
            dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.UPDATE_NEWTODO_SUCCESS, payload: responseJson.data })
            debugger
            return console.log(responseJson)
        })
            .catch((error) => {
                dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.UPDATE_NEWTODO_FAILURE, payload: error })
                console.error(error);
            });
    }
}


// delete todo list
export const deleteTask = (api, params) => {

    debugger
   
    return (dispatch, getState) => {

        debugger
        dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.DELETE_NEWTODO_START})

        axios.delete(api).then((responseJson) => {
            dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.DELETE_NEWTODO_SUCCESS, payload: responseJson.data })
            debugger
            return console.log(responseJson)
        })
            .catch((error) => {
                dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.DELETE_NEWTODO_FAILURE, payload: error })
                console.error(error);
            });
    }
}




