import React from 'react';
import '../styles/QuestionPage.css';
import QuestionBox from './QuestionBox';

const QuestionPage = ({ winner, question, value, change, click, activeTeam, team1, team2 }) => {

    return (
        <>
            {winner ? <h2 className='winner'>Wygral {winner}</h2> : <QuestionBox question={question} value={value} change={change} click={click} activeTeam={activeTeam} team1={team1} team2={team2}/>}
        </>

    );
}

export default QuestionPage;
