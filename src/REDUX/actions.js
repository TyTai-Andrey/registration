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



export function nextPage (argument) {
	return {
		type: NEXT_PAGE
	}
}

export function prevPage (argument) {
	return {
		type: PREV_PAGE
	}
}



export function setValue (name, value) {
    
	return {
		type: SET_VALUE,
		payload: name,
		payload2: value,
	}
}





export function PAGE1_activeButton (argument) {
	return {
		type: PAGE1_ACTIVE
	}
}
export function PAGE1_notActiveButton (argument) {
	return {
		type: PAGE1_NOT_ACTIVE
	}
}


export function PAGE2_activeButton (argument) {
	return {
		type: PAGE2_ACTIVE
	}
}
export function PAGE2_notActiveButton (argument) {
	return {
		type: PAGE2_NOT_ACTIVE
	}
}

export function PAGE3_activeButton (argument) {
	return {
		type: PAGE3_ACTIVE
	}
}
export function PAGE3_notActiveButton (argument) {
	return {
		type: PAGE3_NOT_ACTIVE
	}
}



