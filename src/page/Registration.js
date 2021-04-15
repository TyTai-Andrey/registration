import React from 'react';
import {useSelector} from 'react-redux';

import UserData from '../components/UserData'
import Email from '../components/Email'
import Password from '../components/Password'
import User from '../components/User'
import Buttons from '../components/Buttons'
import Counter from '../components/Counter'




function Registration() {
	const page = useSelector(state => state.counter.counter) 

	return (
		<div className="registration">
		<div className="registration_form">

		{/*Показываем необходимый этап формы*/}

		{
			(page === 1) ? <UserData/> : null
		}

		{
			(page === 2) ? <Email/> : null
		}

		{
			(page === 3) ? <Password/> : null
		}

		{
			(page === 4) ? <User/> : null
		}



		<Buttons/>
		</div>

		{/*Показывает номер этапа*/}

		{
			(page !== 4) ? <Counter/> : null
		}

		</div>
		)
}



export default Registration;
