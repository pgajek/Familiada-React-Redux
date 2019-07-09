import React from 'react';
import './WhosFirst.css';
import { connect } from 'react-redux';

const WhosFirst = ({ whosFirst, question, team1, team2 }) => {
  return (
    <div className="whosFirst" onKeyPress={e => whosFirst(e)}>
      <h2 className="question">{question}</h2>
      <div className="btns">
        <button className="btn" onClick={e => whosFirst(e)} data-id="team1">
          {team1.name}: A
        </button>
        <button className="btn" onClick={e => whosFirst(e)} data-id="team2">
          {team2.name}: L
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    question: state.currentQuestion.question,
    team1: state.team1,
    team2: state.team2
  };
};
const mapDispatchToProps = dispatch => {
  return {
    whosFirst: e =>
      dispatch({ type: 'WHOS_FIRST', payload: e.target.dataset.id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhosFirst);
