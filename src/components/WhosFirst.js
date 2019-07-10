import React from 'react'
import '../styles/WhosFirst.css';

const WhosFirst = ({ whosFirst, question, team1, team2 }) => {
    return (
        <div className="whosFirst" onKeyPress={(e) => whosFirst(e)}>
            <h2 className="question">{question}</h2>
            <div className="btns">
                <button className='btn' onClick={whosFirst} data-id='team1'>{team1.name}: A</button>
                <button className='btn' onClick={whosFirst} data-id='team2'>{team2.name}: L</button>
            </div>
        </div>
    );
}

export default WhosFirst;