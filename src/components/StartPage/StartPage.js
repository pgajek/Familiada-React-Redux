import React from 'react';
import './StartPage.css';

const StartPage = ({ start, surname1, surname2, change }) => {
  return (
    <div className="startingPage">
      <h1 className="familiada">Familiada</h1>
      <label htmlFor="surname1">
        Nazwisko 1:
        <input type="text" id="surname1" value={surname1} onChange={change} />
      </label>
      <label htmlFor="surname2">
        Nazwisko 2:
        <input type="text" id="surname2" value={surname2} onChange={change} />
      </label>
      <button className="btn" onClick={start}>
        {' '}
        Start
      </button>
    </div>
  );
};

export default StartPage;
