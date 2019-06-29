import React from 'react';
import './MainBoard.css';
import StartPage from '../StartPage/StartPage';
import QuestionPage from '../QuestionPage/QuestionPage';

const MainBoard = ({
  start,
  gameStarted,
  question,
  value,
  change,
  handleAnswerBtn,
  winner,
  activeTeam,
  surname1,
  surname2,
  team1,
  team2
}) => {
  return (
    <div className="mainBoard">
      {gameStarted ? (
        <QuestionPage
          question={question}
          value={value}
          change={change}
          click={handleAnswerBtn}
          winner={winner}
          activeTeam={activeTeam}
          team1={team1}
          team2={team2}
        />
      ) : (
        <StartPage
          start={start}
          surname1={surname1}
          surname2={surname2}
          change={change}
        />
      )}
    </div>
  );
};

export default MainBoard;
