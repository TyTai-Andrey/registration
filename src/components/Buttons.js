import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {nextPage, prevPage} from '../REDUX/actions.js';



// Кнопки, в зависимости от этапа
function Buttons() {
	
	const dispatch = useDispatch() 
	
	const page = useSelector(state => state.counter.counter) 
	const buttonStatus = useSelector(state => state.button)


	return (
		<div className="buttons">

			{(+page !== 1) ?
			<button className="button"
			onClick={()=>dispatch(prevPage())}>
			Назад
			</button>
			: null}
			
			{(+page === 1) ?
			<button className="button"
			onClick={()=>dispatch(nextPage())}
			disabled={buttonStatus.PAGE1_statusButton}
			>
			Далее
			</button>
			: null}

			{(+page === 2) ?
			<button className="button"
			onClick={()=>dispatch(nextPage())}
			disabled={buttonStatus.PAGE2_statusButton}
			>
			Далее
			</button>
			: null}

			{(+page === 3) ?
			<button className="button"
			onClick={()=>dispatch(nextPage())}
			disabled={buttonStatus.PAGE3_statusButton}
			>
			Отправить
			</button>	
			: null}

		</div>
	)
}

export default Buttons;
