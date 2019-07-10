import React, { Component } from 'react';
import { connect } from 'react-redux';
import fail from '../../audio/fail.mp3';
import correct from '../../audio/good.mp3';
import { store } from '../..';
const correctSound = new Audio(correct);
const failSound = new Audio(fail);

class QuestionBox extends Component {
  checkAnswers = e => {
    e.preventDefault();
    const answers = this.props.question.answers;
    const answer = answers.filter(
      item => item.name.toUpperCase() === this.props.inputValue.toUpperCase()
    );
    const active = this.props.activeTeam;
    if (answer.length > 0) {
      const index = answers.indexOf(...answer);
      answers[index].correct = true;
      correctSound.play();
      this.props.correctAnswers(answer);
    } else {
      if (
        this.props[active].fails < 3 &&
        answers.filter(item => item.correct === true).length !== answers.length
      ) {
        failSound.play();
        this.props.addFails();
      }
    }
  };
  render() {
    const { question, value, activeTeam, team1, team2, change } = this.props;
    const answers = question.answers.map(answer => (
      <div className="answerBox" key={answer.id}>
        {answer.id}. {answer.correct ? answer.name : ''}
        <span className="answerPoints">
          {answer.correct ? answer.points : 0}
        </span>
      </div>
    ));
    return (
      <div className="questionBox">
        <h3 className="question"> {question.question}</h3>
        <div className="answers">{answers}</div>

        <form className="answerForm" autoComplete="off">
          <label htmlFor="inputValue">
            Podaj odpowiedz:
            <input
              type="text"
              id="inputValue"
              value={value}
              onChange={change}
              placeholder="odpowiedz"
            />
          </label>
          <button className="answerFormBtn" onClick={e => this.checkAnswers(e)}>
            Sprawdz
          </button>
          <span className="activeTeam">
            Tura: {activeTeam === 'team1' ? team1.name : team2.name}
          </span>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    question: state.currentQuestion,
    value: state.inputValue,
    activeTeam: state.activeTeam,
    team1: state.team1,
    team2: state.team2,
    inputValue: state.inputValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    change: e =>
      dispatch({
        type: 'INPUT_CHANGE',
        payload: {
          name: e.target.id,
          value: e.target.value
        }
      }),
    correctAnswers: answer => {
      dispatch({
        type: 'CORRECT_ANSWERS',
        payload: {
          answer
        }
      });
    },
    addFails: () => {
      dispatch({ type: 'ADD_FAILS' });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBox);
