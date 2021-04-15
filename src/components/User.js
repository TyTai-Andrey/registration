import React from 'react';
import {useSelector} from 'react-redux';


// Все собранные данные

function User() {
	
	const input = useSelector(state => state.values)
	const keys = Object.keys(input)

	return (
		<>
			{
				keys.map(i=> (
					<div className="row" key={i}>
						<p>{i}:</p>
						<p>{input[i]}</p>
					</div>
					)
				)
			}
		</>
	)
}

export default User;
