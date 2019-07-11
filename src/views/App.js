import React, { Component } from 'react';
import SideBoard from '../components/SideBoard/SideBoard';
import MainBoard from '../components/MainBoard/MainBoard';
import './App.css';
import WhosFirst from '../components/WhosFirst/WhosFirst';
import { connect } from 'react-redux';
import intro from '../audio/intro.mp3';
import * as actionTypes from '../store/actions/actionTypes';

class App extends Component {
  intro = new Audio(intro);
  componentDidMount() {
    document.addEventListener('keyup', e => {
      const { whosFirst } = this.props;
      this.props.handleWhosFirst(e, whosFirst);
    });
    this.props.newQuestion();
    this.intro.play();
  }
  componentWillUnmount() {
    const { whosFirst } = this.props;
    document.removeEventListener('keyup', e =>
      this.props.handleWhosFirst(e, whosFirst)
    );
  }
  checkFails = () => {
    const {
      activeTeam,
      team1,
      team2,
      handleNewWinner,
      newQuestion,
      handleCheckFails
    } = this.props;

    if (team1.fails > 2 && team2.fails > 2) {
      const newWinner = this.checkWinner();
      if (newWinner !== '') {
        handleNewWinner(newWinner);
      } else {
        setTimeout(newQuestion, 3000);
      }
    } else if (this.props[activeTeam].fails > 2) {
      if (activeTeam === 'team1') {
        handleCheckFails('team2');
      } else if (activeTeam === 'team2') {
        handleCheckFails('team1');
      }
    }
  };

  checkWinner() {
    const { team1, team2 } = this.props;
    if (team1.points >= 250 && team2.points >= 250) {
      if (team1.points > team2.points) {
        return 'team1';
      } else {
        return 'team2';
      }
    } else if (team1.points >= 250 && team2.points < 250) {
      return 'team1';
    } else if (team1.points < 250 && team2.points >= 250) {
      return 'team2';
    } else {
      return '';
    }
  }
  checkCorrects = () => {
    const { currentQuestion, handleNewWinner, newQuestion } = this.props;
    if (
      currentQuestion.answers.filter(answer => answer.correct === false)
        .length === 0
    ) {
      const newWinner = this.checkWinner();

      if (newWinner !== '') {
        handleNewWinner(newWinner);
      } else {
        setTimeout(newQuestion, 3000);
      }
    }
  };
  componentDidUpdate() {
    const { gameStarted } = this.props;
    if (gameStarted) {
      this.checkFails();
      this.checkCorrects();
    }
  }
  render() {
    const { team1, team2, whosFirst } = this.props;
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
        <MainBoard />
        <SideBoard team={team2} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    whosFirst: state.whosFirst,
    team1: state.team1,
    team2: state.team2,
    gameStarted: state.gameStarted,
    activeTeam: state.activeTeam,
    winner: state.winner,
    currentQuestion: state.currentQuestion
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleWhosFirst: (e, whosFirst) => {
      if (whosFirst) {
        if (e.keyCode === 65) {
          dispatch({ type: actionTypes.WHOS_FIRST, payload: 'team1' });
        } else if (e.keyCode === 76) {
          dispatch({ type: actionTypes.WHOS_FIRST, payload: 'team2' });
        }
      }
    },
    newQuestion: () => dispatch({ type: actionTypes.NEW_QUESTION }),
    handleNewWinner: winner =>
      dispatch({ type: actionTypes.NEW_WINNER, payload: winner }),
    handleCheckFails: team =>
      dispatch({ type: actionTypes.HANDLE_CHECK_FAILS, payload: team })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
