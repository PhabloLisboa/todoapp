import {combineReducers} from 'redux'

import toDoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
	todo: toDoReducer
})

export default rootReducer