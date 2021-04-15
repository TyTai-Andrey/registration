import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PAGE2_notActiveButton, PAGE2_activeButton, setValue} from '../REDUX/actions.js';



// Поле для ввода Email
function Email() {

	const dispatch = useDispatch() 

	const input = useSelector(state => state.values)

	if (input.email) {
		if (input['email'].trim() > 2) {
			dispatch(PAGE2_activeButton())
		} else {
			dispatch(PAGE2_notActiveButton())
			
		}
	} 

	function changeValue (event) {
		dispatch(setValue(event.target.name, event.target.value));
	}


	return (
		<>
			<div className="registrationInput">
				<p>
					<label  htmlFor="email">Email</label>
				</p>
				<p>
					<input 
					name="email" 
					id="email" 
					type="text"
					value={input.email}
					onChange={event=>changeValue(event)}
					/>
				</p>
			</div>
		</>
	)
}

export default Email;
