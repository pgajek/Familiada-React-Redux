import React, { Component } from 'react';
import SideBoard from '../components/SideBoard/SideBoard';
import MainBoard from '../components/MainBoard/MainBoard';
import './App.css';
import WhosFirst from '../components/WhosFirst/WhosFirst';
import failSound from '../audio/fail.mp3';
import introSound from '../audio/intro.mp3';
import goodSound from '../audio/good.mp3';
import { connect } from 'react-redux';

class App extends Component {
  failAudio = new Audio(failSound);
  introAudio = new Audio(introSound);
  goodAudio = new Audio(goodSound);

  handleGameStart = () => {
    const { surname1, surname2, handleGameStartAction } = this.props;

    if (surname1 !== '' && surname2 !== '') {
      handleGameStartAction(surname1, surname2);
    }

    // this.newQuestion();
    // this.introAudio.pause();
  };
  componentDidMount() {
    document.addEventListener('keyup', e => this.props.handleWhosFirst(e));
    // this.introAudio.play();
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.props.handleWhosFirst(e));
  }
  render() {
    const {
      team1,
      team2,
      surname1,
      surname2,
      activeTeam,
      currentQuestion,
      winner,
      whosFirst,
      inputValue,
      handleGameStart
    } = this.props;
    return (
      <main className="app">
        <div className="turnHorizon">
          <h2>
            Czy możesz obrócić swój telefon, lub rozciągnąc przeglądarkę
            horyzontalnie? Inaczej wygląda paskudnie.
          </h2>
        </div>

        {whosFirst ? <WhosFirst /> : null}
        <SideBoard team={team1} />
        <MainBoard
          value={inputValue}
          // change={this.handleAnswerInput}
          // gameStarted={this.state.gameStarted}
          start={this.handleGameStart}
          question={currentQuestion}
          // handleAnswerBtn={this.handleAnswerButtonClick}
          winner={winner}
          activeTeam={activeTeam}
          surname1={surname1}
          surname2={surname2}
          team1={team1}
          team2={team2}
        />
        <SideBoard team={team2} />
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    whosFirst: state.whosFirst,
    currentQuestion: state.currentQuestion,
    team1: state.team1,
    team2: state.team2,
    surname1: state.surname1,
    surname2: state.surname2,
    activeTeam: state.activeTeam,
    winner: state.winner,
    inputValue: state.inputValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGameStartAction: (surname1, surname2) =>
      dispatch({
        type: 'HANDLE_GAME_START',
        payload: {
          surname1,
          surname2
        }
      }),
    handleWhosFirst: e => {
      if (e.keyCode === 65) {
        dispatch({ type: 'WHOS_FIRST', payload: 'team1' });
      } else if (e.keyCode === 76) {
        dispatch({ type: 'WHOS_FIRST', payload: 'team2' });
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
