import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {nextPage, prevPage} from '../REDUX/actions.js';



function Buttons() {
	const dispatch = useDispatch() 
	const page = useSelector(state => state.counter.counter) 

  return (
	    <div className="buttons">
	    	{(+page !== 1) ?
	    	<div className="button"
			onClick={()=>dispatch(prevPage())}>
				Назад
			</div>
			: null}
			
			{(+page !== 3) ?
	    	<div className="button"
			onClick={()=>dispatch(nextPage())}>
				Далее
			</div>
			: null}

			{(+page === 3) ?
	    	<div className="button"
			onClick={()=>dispatch(nextPage())}>
				Отправить
			</div>
			: null}
			
	    </div>
  )
}

export default Buttons;
