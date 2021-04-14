import React from 'react';


function Password() {
  return (
    <>
		<div className="registrationInput">
	        <p><label  htmlFor="password">Пароль</label></p>
	        <p><input name="password" id="password" type="text"/></p>
		</div>
		<div className="registrationInput">
	        <p><label  htmlFor="repeatPassword">Повторите пароль</label></p>
	        <p><input name="repeatPassword" id="repeatPassword" type="text"/></p>
		</div>
    </>
  )
}

export default Password;
