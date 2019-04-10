import React, { Component } from 'react';
import SideBoard from './SideBoard';
import MainBoard from './MainBoard';
import '../styles/App.css';
import WhosFirst from './WhosFirst';
import failSound from '../audio/fail.mp3';
import introSound from '../audio/intro.mp3';
import goodSound from '../audio/good.mp3';



class App extends Component {
    failAudio = new Audio(failSound);
    introAudio = new Audio(introSound);
    goodAudio = new Audio(goodSound);

    questions = [
        {
            id: 1,
            question: 'Europejskie panstwo wieksze od polski?',
            answers: [
                {
                    id: 1,
                    name: 'francja',
                    points: 33,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'wielka brytania',
                    points: 21,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'wlochy',
                    points: 16,
                    correct: false,
                },
                {
                    id: 4,
                    name: 'niemcy',
                    points: 11,
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: 'Jakie cisto kojarzy sie z wizyta u babci?',
            answers: [
                {
                    id: 1,
                    name: 'szarlotka',
                    points: 45,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'sernik',
                    points: 30,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'makowiec',
                    points: 27,
                    correct: false,
                },

            ],
        },
        {
            id: 3,
            question: 'Jakie klawisze oprócz literowych znajdują się na klawiaturze?',
            answers: [
                {
                    id: 1,
                    name: 'spacja',
                    points: 51,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'enter',
                    points: 38,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'shift',
                    points: 22,
                    correct: false,
                },
                {
                    id: 4,
                    name: 'alt',
                    points: 19,
                    correct: false,
                },
            ],
        },
        {
            id: 4,
            question: 'Jak zabijamy czas podczas jazdy pociagiem?',
            answers: [
                {
                    id: 1,
                    name: 'czytamy',
                    points: 51,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'spimy',
                    points: 38,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'patrzymy przez okno',
                    points: 22,
                    correct: false,
                },
                {
                    id: 4,
                    name: 'rozmyslamy',
                    points: 19,
                    correct: false,
                },
                {
                    id: 5,
                    name: 'sluchamy muzyki',
                    points: 10,
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question: 'Co moze poprawic nasz nastroj?',
            answers: [
                {
                    id: 1,
                    name: 'muzyka',
                    points: 37,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'zakupy',
                    points: 29,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'pogoda',
                    points: 25,
                    correct: false,
                },
                {
                    id: 4,
                    name: 'spacer',
                    points: 13,
                    correct: false,
                },
                {
                    id: 5,
                    name: 'spotkanie',
                    points: 7,
                    correct: false,
                },
            ],
        },
        {
            id: 6,
            question: 'Czesc garderoby na litere S?',
            answers: [
                {
                    id: 1,
                    name: 'spodnie',
                    points: 34,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'sweter',
                    points: 33,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'sukienka',
                    points: 22,
                    correct: false,
                },
                {
                    id: 4,
                    name: 'spodnica',
                    points: 19,
                    correct: false,
                },
                {
                    id: 5,
                    name: 'skarpetka',
                    points: 12,
                    correct: false,
                },
                {
                    id: 6,
                    name: 'szalik',
                    points: 6,
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: 'Co zapada przed noca?',
            answers: [
                {
                    id: 1,
                    name: 'zmrok',
                    points: 40,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'zmierzch',
                    points: 31,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'wieczor',
                    points: 20,
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: 'Wymien elementy dekoracji wnetrz?',
            answers: [
                {
                    id: 1,
                    name: 'zaslony',
                    points: 30,
                    correct: false,
                },
                {
                    id: 2,
                    name: 'firanki',
                    points: 20,
                    correct: false,
                },
                {
                    id: 3,
                    name: 'lampa',
                    points: 10,
                    correct: false,
                },
                {
                    id: 4,
                    name: 'obraz',
                    points: 5,
                    correct: false,
                },
            ],
        },

    ]
    state = {
        currentQuestion: null,
        team1: {
            name: 'team1',
            points: 0,
            fails: 0,
        },
        team2: {
            name: 'team2',
            points: 0,
            fails: 0,
        },
        gameStarted: false,
        inputValue: '',
        activeTeam: 'team1',
        winner: '',
        whosFirst: false,
        surname1: '',
        surname2: '',
    }
    handleGameStart = () => {
        let surname1 = 'team1';
        let surname2 = 'team2';
        if (this.state.surname1 !== '' && this.state.surname2 !== '') {
            surname1 = this.state.surname1;
            surname2 = this.state.surname2;
        }
        this.setState(prevState => {
            return {
                gameStarted: true,
                team1: {
                    ...prevState.team1,
                    name: surname1
                },
                team2: {
                    ...prevState.team2,
                    name: surname2
                }
            }
        })
        this.newQuestion();
        this.introAudio.pause();

    }
    handleAnswerInput = (e) => {
        if (!this.state.whosFirst) {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }
    handleAnswerButtonClick = (e) => {
        e.preventDefault();

        const { inputValue, currentQuestion: { answers } } = this.state;
        const answer = answers.filter(item => item.name.toUpperCase() === inputValue.toUpperCase());
        const active = this.state.activeTeam;

        if (answer.length > 0) {

            if (answer[0].correct === true) {
                this.setState({
                    inputValue: ''
                })
            }

            const index = answers.indexOf(...answer);
            const newAnswers = answers;
            newAnswers[index].correct = true;
            this.goodAudio.play();
            this.setState(prevState => {
                return {
                    inputValue: '',
                    currentQuestion: {
                        ...prevState.currentQuestion,
                        answers: newAnswers,
                    },
                    [active]: {
                        ...prevState[active],
                        points: prevState[active].points + answer[0].points
                    }
                }
            })
        }
        else {
            if ((this.state[active].fails < 3) && (answers.filter(item => item.correct === true).length !== answers.length)) {
                this.failAudio.play();
                this.setState(prevState => {
                    return {
                        inputValue: '',
                        [active]: {
                            ...prevState[active],
                            fails: prevState[active].fails + 1
                        }
                    }
                })
            }
        }
    }

    newQuestion = () => {
        if (!this.state.winner) {
            const question = this.questions[Math.floor(Math.random() * this.questions.length)];
            this.questions = this.questions.filter(item => item !== question);
            this.setState(prevState => {
                return {
                    currentQuestion: question,
                    whosFirst: true,
                    team1: {
                        ...prevState.team1,
                        fails: 0,
                    },
                    team2: {
                        ...prevState.team2,
                        fails: 0,
                    },
                }
            })
        }

    }
    checkFails() {

        const active = this.state.activeTeam;
        if ((this.state.team1.fails > 2 && this.state.team2.fails > 2)) {

            const newWinner = this.checkWinner();
            if (newWinner !== '' && this.state.winner === '') {
                this.setState({
                    winner: newWinner
                })
            }
            setTimeout(this.newQuestion, 3000);
        } else {
            if (this.state[active].fails > 2) {

                if (this.state.activeTeam === 'team1') {

                    this.setState(prevState => {
                        return {
                            activeTeam: 'team2',
                            team2: {
                                ...prevState.team2,
                                fails: 2,
                            }
                        }
                    })
                } else if (this.state.activeTeam === 'team2') {
                    this.setState(prevState => {
                        return {
                            activeTeam: 'team1',
                            team1: {
                                ...prevState.team1,
                                fails: 2,
                            }
                        }
                    })
                }
            }

        }
    }
    handleWhosFirst = (e) => {
        if ((e.target.dataset.id === 'team1' || e.keyCode === 65) && this.state.whosFirst === true) {
            this.setState({
                activeTeam: 'team1',
                whosFirst: false,
            })
        } else if ((e.target.dataset.id === 'team2' || e.keyCode === 76) && this.state.whosFirst === true) {
            this.setState({
                activeTeam: 'team2',
                whosFirst: false
            })
        }
    }
    checkCorrects() {
        if (this.state.currentQuestion.answers.filter(answer => answer.correct === false).length === 0) {
            const newWinner = this.checkWinner();
            if (newWinner !== '' && this.state.winner === '') {
                this.setState({
                    winner: newWinner
                })
            }
            setTimeout(this.newQuestion, 3000);
        }
    }
    checkWinner() {
        const { team1, team2 } = this.state;
        if ((team1.points >= 250) && (team2.points >= 250)) {
            if (team1.points > team2.points) {
                return 'team1';
            } else {
                return 'team2';
            }
        } else if ((team1.points >= 250) && (team2.points < 250)) {
            return 'team1';
        } else if ((team1.points < 250) && (team2.points >= 250)) {
            return 'team2';
        } else {
            return '';
        }

    }
    componentDidUpdate() {
        if (this.state.gameStarted) {
            this.checkFails();
            this.checkCorrects();
        }
    }
    componentDidMount() {
        document.addEventListener('keyup', this.handleWhosFirst);
        this.introAudio.play();
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleWhosFirst);
    }
    render() {

        const { team1, team2, currentQuestion, inputValue, winner, whosFirst, activeTeam, surname1, surname2 } = this.state;
        return (
            <main className="app">
                <div className='turnHorizon'>
                    <h2>Czy możesz obrócić swój telefon, lub rozciągnąc przeglądarkę horyzontalnie? Inaczej wygląda paskudnie.</h2>
                </div>

                {whosFirst ? <WhosFirst whosFirst={this.handleWhosFirst} question={currentQuestion.question} team1={team1} team2={team2} /> : null}
                <SideBoard team={team1} />
                <MainBoard
                    value={inputValue}
                    change={this.handleAnswerInput}
                    gameStarted={this.state.gameStarted}
                    start={this.handleGameStart}
                    question={currentQuestion}
                    handleAnswerBtn={this.handleAnswerButtonClick}
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

export default App;