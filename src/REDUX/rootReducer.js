import {combineReducers} from 'redux'

import {
	// Переключение между этапами формы
	NEXT_PAGE, PREV_PAGE, 
	//Установка значений
	SET_VALUE,
	//Активирование и деактевирование кнопок
	PAGE1_NOT_ACTIVE, PAGE1_ACTIVE,
	PAGE2_NOT_ACTIVE, PAGE2_ACTIVE,
	PAGE3_NOT_ACTIVE, PAGE3_ACTIVE
	} from './types'


const initialCounterState = {
	counter: 1,
}

//Этапы формы
function counterReducer (state = initialCounterState, action) {
	switch (action.type) {
		case NEXT_PAGE:
			return {...state, counter: ++state.counter}
		case PREV_PAGE:
			return {...state, counter: --state.counter}
		default:
			return state;
	}
}


const initialButtonState = {
	PAGE1_statusButton: true,
	PAGE2_statusButton: true,
	PAGE3_statusButton: true,
}
//Кнопки переключения
function buttonReducer (state = initialButtonState, action) {
	switch (action.type) {

		case PAGE1_ACTIVE:
			return {...state, PAGE1_statusButton: false}
		case PAGE1_NOT_ACTIVE:
			return {...state, PAGE1_statusButton: true}

		case PAGE2_ACTIVE:
			return {...state, PAGE2_statusButton: false}
		case PAGE2_NOT_ACTIVE:
			return {...state, PAGE2_statusButton: true}

		case PAGE3_ACTIVE:
			return {...state, PAGE3_statusButton: false}
		case PAGE3_NOT_ACTIVE:
			return {...state, PAGE3_statusButton: true}
		default:
			return state;
	}
}


const initialValueState = {
	name: '',
	surname: '',
	patronymic: '',
	email: '',
    password: '',
	repeatPassword: '',
  }
//Значения
function valueReducer (state = initialValueState, action) {
	switch (action.type) {
		case SET_VALUE:
			return {...state, [`${action.payload}`]: action.payload2}
		
		default:
			return state;
	}
}

export const rootReducer = combineReducers ({
	counter: counterReducer,
	button: buttonReducer,
	values: valueReducer
})