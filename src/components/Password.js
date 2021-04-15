import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PAGE3_notActiveButton, PAGE3_activeButton, setValue} from '../REDUX/actions.js';


// Поле для ввода Пароля

function Password() {


	const dispatch = useDispatch() 

	const input = useSelector(state => state.values)

	if (input.password) {

		if (input.password.trim() > 2) {

			if (input.password.trim() === input.repeatPassword.trim()) {

				dispatch(PAGE3_activeButton())

			} else {

				dispatch(PAGE3_notActiveButton())	

			}
		}
	} 


	function changeValue (event) {
		dispatch(setValue(event.target.name, event.target.value));
	}

	return (
		<>
			<div className="registrationInput">
				<p>
					<label  htmlFor="password">Пароль</label>
				</p>
				<p>
					<input 
					name="password" 
					id="password" 
					type="text"
					onChange={event=>changeValue(event)}
					value={input.password}/>
				</p>
			</div>
			<div className="registrationInput">
				<p>
					<label  htmlFor="repeatPassword">Повторите пароль</label>
				</p>
				<p>
					<input 
					name="repeatPassword" 
					id="repeatPassword" 
					type="text"
					onChange={event=>changeValue(event)}
					value={input.repeatPassword}/>
				</p>
			</div>
		</>
	)
}

export default Password;
