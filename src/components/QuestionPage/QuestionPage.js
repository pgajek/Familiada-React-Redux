import React from 'react';
import './QuestionPage.css';
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionPage = ({
  winner,
  question,
  value,
  change,
  click,
  activeTeam,
  team1,
  team2
}) => {
  return (
    <>
      {winner ? (
        <h2 className="winner">
          Wygral {activeTeam === 'team1' ? team1.name : team2.name}
        </h2>
      ) : (
        <QuestionBox
          question={question}
          value={value}
          change={change}
          click={click}
          activeTeam={activeTeam}
          team1={team1}
          team2={team2}
        />
      )}
    </>
  );
};

export default QuestionPage;
