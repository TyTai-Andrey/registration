import {combineReducers} from 'redux'
import {NEXT_PAGE, PREV_PAGE} from './types'

const initialState = {
	counter: 1,
}

function counterReducer (state = initialState, action) {
	switch (action.type) {
		case NEXT_PAGE:
			return {...state, counter: ++state.counter}
		case PREV_PAGE:
			return {...state, counter: --state.counter}
		default:
			return state;
	}
}

export const rootReducer = combineReducers ({
	counter: counterReducer,
})