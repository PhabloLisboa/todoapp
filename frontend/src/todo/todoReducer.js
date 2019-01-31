const INITAL_STATE = { description: '',list:[] }

export default (state = INITAL_STATE, action) => {
	switch(action.type){
		case 'DESCRIPTION_CHANGED':
			return { ...state, description: action.payload }
		case 'TODO_SEARCH':
			return { ...state, list: action.payload }
		case 'TODO_CLEANED':
			return {...state, description: ''}
		default:
			return state
	}
}