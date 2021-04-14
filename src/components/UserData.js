import React from 'react';


function UserData() {
  return (
    <>
      <div className="registrationInput">
        <p><label  htmlFor="name">Имя</label></p>
        <p><input name="name" id="name" type="text"/></p>
      </div>
      <div className="registrationInput">
        <p><label  htmlFor="surname">Фамилия</label></p>
        <p><input name="surname" id="surname" type="text"/></p>
      </div>
      <div className="registrationInput">
        <p><label  htmlFor="patronymic">Отчество</label></p>
        <p><input name="patronymic" id="patronymic" type="text"/></p>
      </div>
    </>
  )
}

export default UserData;
