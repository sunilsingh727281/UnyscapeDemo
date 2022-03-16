import * as All_Actions from '../../../Utility/ActionsConstants'
import axios from 'axios'



// Add new todo list

export const addNewTask = (api, params) => {

    debugger
   
    return (dispatch, getState) => {

        debugger
        dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.ADD_NEWTODO_START})

        axios.post(api,params).then((responseJson) => {
            dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.ADD_NEWTODO_SUCCESS, payload: responseJson.data })
            debugger
            return console.log(responseJson)
        })
            .catch((error) => {
                dispatch({ type: All_Actions.ACTION_CONSTANT.todolisthome.ADD_NEWTODO_FAILURE, payload: error })
                console.error(error);
            });
    }
}
