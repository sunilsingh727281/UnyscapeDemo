import * as All_Actions from '../../../Utility/ActionsConstants'

let initialState = {
    addToDoDict: {},
    isLoading: false,
    error:null
}

export default addNewToDo = (state = initialState, action) => {

    switch (action.type) {

        case All_Actions.ACTION_CONSTANT.todolisthome.ADD_NEWTODO_START:
            return Object.assign({}, state, { isLoading: true })
        case All_Actions.ACTION_CONSTANT.todolisthome.ADD_NEWTODO_SUCCESS:
            debugger
            console.log('the action is:' + action.type,action.payload)
            return Object.assign({}, state, { addToDoDict: action.payload, isLoading: false })
        case All_Actions.ACTION_CONSTANT.todolisthome.ADD_NEWTODO_FAILURE:
            return Object.assign({}, state,{error:action.payload, isLoading:false})
        default:
            return state;
    }
}
