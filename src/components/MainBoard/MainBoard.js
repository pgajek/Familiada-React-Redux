import React from 'react';
import './MainBoard.css';
import StartPage from '../StartPage/StartPage';
import QuestionPage from '../QuestionPage/QuestionPage';

import { connect } from 'react-redux';

const MainBoard = ({ gameStarted }) => {
  return (
    <div className="mainBoard">
      {gameStarted ? <QuestionPage /> : <StartPage />}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    gameStarted: state.gameStarted
  };
};
export default connect(mapStateToProps)(MainBoard);
