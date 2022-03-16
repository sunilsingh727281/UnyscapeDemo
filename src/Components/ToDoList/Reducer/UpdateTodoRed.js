
import * as All_Actions from '../../../Utility/ActionsConstants'

let initialState = {
    updateTodoListDict: {},
    isLoading1: false,
    error:null
}

export default updateToDo = (state = initialState, action) => {

    switch (action.type) {

        case All_Actions.ACTION_CONSTANT.todolisthome.UPDATE_NEWTODO_START:
            return Object.assign({}, state, { isLoading1: true })
        case All_Actions.ACTION_CONSTANT.todolisthome.UPDATE_NEWTODO_SUCCESS:
            debugger
            console.log('the action is:' + action.type,action.payload)
            return Object.assign({}, state, { updateTodoListDict: action.payload, isLoading1: false })
        case All_Actions.ACTION_CONSTANT.todolisthome.UPDATE_NEWTODO_FAILURE:
            return Object.assign({}, state,{error:action.payload, isLoading1:false})
        default:
            return state;
    }
}
