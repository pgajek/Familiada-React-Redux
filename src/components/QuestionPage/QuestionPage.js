import React from 'react';
import './QuestionPage.css';
import QuestionBox from '../QuestionBox/QuestionBox';
import { connect } from 'react-redux';

const QuestionPage = ({ winner, team1, team2 }) => {
  return (
    <>
      {winner ? (
        <h2 className="winner">
          Wygral {winner === 'team1' ? team1.name : team2.name}
        </h2>
      ) : (
        <QuestionBox />
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    winner: state.winner,
    team1: state.team1,
    team2: state.team2
  };
};
export default connect(mapStateToProps)(QuestionPage);
