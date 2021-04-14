import {NEXT_PAGE, PREV_PAGE} from './types'

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

