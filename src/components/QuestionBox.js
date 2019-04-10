import React from 'react'

const QuestionBox = ({ question, value, change, click, activeTeam, team1, team2 }) => {

    const answers = question.answers.map(answer => (
        <div className="answerBox" key={answer.id}>
            {answer.id}. {answer.correct ? answer.name : ''}
            <span className='answerPoints'>{answer.correct ? answer.points : 0}</span>
        </div>
    ))
    return (
        <div className="questionBox">
            <h3 className='question'> {question.question}</h3 >
            <div className="answers">
                {answers}
            </div>

            <form className="answerForm">
                <label htmlFor="inputValue">Podaj odpowiedz:
            <input type="text" id="inputValue" value={value} onChange={change} placeholder='odpowiedz' />
                </label>
                <button className="answerFormBtn" onClick={click}>Sprawdz</button>
                <span className="activeTeam">Tura: {activeTeam === 'team1' ? team1.name : team2.name}</span>
            </form>
        </div >
    );
}

export default QuestionBox;