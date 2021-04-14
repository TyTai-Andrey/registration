import React from 'react';
import UserData from '../components/UserData'
import Email from '../components/Email'
import Password from '../components/Password'
import User from '../components/User'
import Buttons from '../components/Buttons'
import Counter from '../components/Counter'

import {useDispatch, useSelector} from 'react-redux';



function Registration() {
	const page = useSelector(state => state.counter.counter) 

  return (
    <div className="registration">
    	<form action="#" className="registration_form">

    	{
    		(page === 1) ? <UserData/> : null
    	}
    	{
    		(page === 2) ? <Email/> : null
    	}
    	{
    		(page === 3) ? <Password/> : null
    	}
	    	
	    	
	    	
	    	<Buttons/>
	    </form>
	    {
    		(page !== 4) ? <Counter/> : null
    	}
	    
    </div>
  )
}



export default Registration;
