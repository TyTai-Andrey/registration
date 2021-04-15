import React from 'react';
import {useSelector} from 'react-redux';


// Показывается номер этапа
function Counter() {

const page = useSelector(state => state.counter.counter) 

  return (
  	<div className="counter">
  		<p>{page}</p>
	  		<span>|</span>
  		<p>3</p>
  	</div>
  )
}

export default Counter;
