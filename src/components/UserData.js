import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PAGE1_notActiveButton, PAGE1_activeButton, setValue} from '../REDUX/actions.js';


function UserData() {

  const dispatch = useDispatch() 
  const input = useSelector(state => state.values)



  // Проверка на количество вводимых символов

  let a = []

  for (let key in input) {

    if (key === 'date') {

      if (input[key].trim().length === 10) {
        a.push(input[key])
      }

    } else {

      if (input[key].trim().length >=3) {
        a.push(input[key])
      }

    }
  }

  if (a.length>3) {
    dispatch(PAGE1_activeButton())
  } else {
    dispatch(PAGE1_notActiveButton())
  }




  

  function changeValue (event) {
    dispatch(setValue(event.target.name, event.target.value));
  }




  return (
    <>
      <div className="registrationInput">
        <p>
          <label  htmlFor="name">Имя</label>
        </p>
        <p>
          <input 
          onChange={event=>changeValue(event)} 
          name="name"
          value={input.name}
          id="name" 
          type="text"/>
        </p>
      </div>
      <div className="registrationInput">
        <p>
          <label  htmlFor="surname">Фамилия</label>
        </p>
        <p>
          <input 
          onChange={event=>changeValue(event)} 
          name="surname"
          value={input.surname} 
          id="surname"  
          type="text"/>
        </p>
      </div>
      <div className="registrationInput">
        <p>
          <label  htmlFor="patronymic">Отчество</label>
        </p>
        <p>
          <input 
          onChange={event=>changeValue(event)} 
          name="patronymic"
          value={input.patronymic} 
          id="patronymic"  
          type="text"/>
        </p>
      </div>
      <div className="registrationInput">
        <p>
          <label  htmlFor="date">Дата рождения</label>
        </p>
        <p>
          <input 
          onChange={event=>changeValue(event)} 
          name="date"
          value={input.date} 
          id="date"  
          type="date"/>
        </p>
      </div>
    </>
  )
}

export default UserData;
