import {createStore,applyMiddleware} from 'redux'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk'


export default store = createStore(RootReducer,applyMiddleware(thunk))


