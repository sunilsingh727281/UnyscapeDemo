import * as All_Actions from '../../../Utility/ActionsConstants'

let initialState = {
    getTodoListDict: {},
    isLoading: false,
    error:null
}

export default getAllToDoList = (state = initialState, action) => {

    switch (action.type) {

        case All_Actions.ACTION_CONSTANT.todolisthome.GET_TODOLIST_START:
            return Object.assign({}, state, { isLoading: true })
        case All_Actions.ACTION_CONSTANT.todolisthome.GET_TODOLIST_SUCCESS:
            debugger
            console.log('the action is:' + action.type,action.payload)
            return Object.assign({}, state, { getTodoListDict: action.payload, isLoading: false })
        case All_Actions.ACTION_CONSTANT.todolisthome.GET_TODOLIST_FAILURE:
            return Object.assign({}, state,{error:action.payload, isLoading:false})
        default:
            return state;
    }
}
