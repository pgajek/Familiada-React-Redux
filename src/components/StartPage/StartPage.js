import React from 'react';
import './StartPage.css';
import { connect } from 'react-redux';

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
        <input
          type="text"
          id="surname2"
          value={surname2}
          onChange={e => change(e)}
        />
      </label>
      <button className="btn" onClick={e => start(e)}>
        {' '}
        Start
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    surname1: state.surname1,
    surname2: state.surname2
  };
};
const mapDispatchToProps = dispatch => {
  return {
    change: e => {
      dispatch({
        type: 'INPUT_CHANGE',
        payload: {
          name: e.target.id,
          value: e.target.value
        }
      });
    },
    start: e => {
      e.preventDefault();
      dispatch({ type: 'START_GAME' });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPage);
