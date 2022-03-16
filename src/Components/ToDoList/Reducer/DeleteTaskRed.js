import * as All_Actions from '../../../Utility/ActionsConstants'

let initialState = {
    deletedTodoListDict: {},
    isLoading2: false,
    error:null
}

export default deleteTodoFromList = (state = initialState, action) => {

    switch (action.type) {

        case All_Actions.ACTION_CONSTANT.todolisthome.DELETE_NEWTODO_START:
            return Object.assign({}, state, { isLoading2: true })
        case All_Actions.ACTION_CONSTANT.todolisthome.DELETE_NEWTODO_SUCCESS:
            debugger
            console.log('the action is:' + action.type,action.payload)
            return Object.assign({}, state, { deletedTodoListDict: action.payload, isLoading2: false })
        case All_Actions.ACTION_CONSTANT.todolisthome.DELETE_NEWTODO_FAILURE:
            return Object.assign({}, state,{error:action.payload, isLoading2:false})
        default:
            return state;
    }
}
