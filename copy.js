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
      };
    });
    this.newQuestion();
    this.introAudio.pause();
  };
  handleAnswerInput = e => {
    if (!this.state.whosFirst) {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  };
  handleAnswerButtonClick = e => {
    e.preventDefault();

    const {
      inputValue,
      currentQuestion: { answers }
    } = this.state;
    const answer = answers.filter(
      item => item.name.toUpperCase() === inputValue.toUpperCase()
    );
    const active = this.state.activeTeam;

    if (answer.length > 0) {
      if (answer[0].correct === true) {
        this.setState({
          inputValue: ''
        });
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
            answers: newAnswers
          },
          [active]: {
            ...prevState[active],
            points: prevState[active].points + answer[0].points
          }
        };
      });
    } else {
      if (
        this.state[active].fails < 3 &&
        answers.filter(item => item.correct === true).length !== answers.length
      ) {
        this.failAudio.play();
        this.setState(prevState => {
          return {
            inputValue: '',
            [active]: {
              ...prevState[active],
              fails: prevState[active].fails + 1
            }
          };
        });
      }
    }
  };

  newQuestion = () => {
    if (!this.state.winner) {
      const question = this.questions[
        Math.floor(Math.random() * this.questions.length)
      ];
      this.questions = this.questions.filter(item => item !== question);
      this.setState(prevState => {
        return {
          currentQuestion: question,
          whosFirst: true,
          team1: {
            ...prevState.team1,
            fails: 0
          },
          team2: {
            ...prevState.team2,
            fails: 0
          }
        };
      });
    }
  };
  checkFails() {
    const active = this.state.activeTeam;
    if (this.state.team1.fails > 2 && this.state.team2.fails > 2) {
      const newWinner = this.checkWinner();
      if (newWinner !== '' && this.state.winner === '') {
        this.setState({
          winner: newWinner
        });
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
                fails: 2
              }
            };
          });
        } else if (this.state.activeTeam === 'team2') {
          this.setState(prevState => {
            return {
              activeTeam: 'team1',
              team1: {
                ...prevState.team1,
                fails: 2
              }
            };
          });
        }
      }
    }
  }
  handleWhosFirst = e => {
    if (
      (e.target.dataset.id === 'team1' || e.keyCode === 65) &&
      this.state.whosFirst === true
    ) {
      this.setState({
        activeTeam: 'team1',
        whosFirst: false
      });
    } else if (
      (e.target.dataset.id === 'team2' || e.keyCode === 76) &&
      this.state.whosFirst === true
    ) {
      this.setState({
        activeTeam: 'team2',
        whosFirst: false
      });
    }
  };
  checkCorrects() {
    if (
      this.state.currentQuestion.answers.filter(
        answer => answer.correct === false
      ).length === 0
    ) {
      const newWinner = this.checkWinner();
      if (newWinner !== '' && this.state.winner === '') {
        this.setState({
          winner: newWinner
        });
      }
      setTimeout(this.newQuestion, 3000);
    }
  }
  checkWinner() {
    const { team1, team2 } = this.state;
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
  componentDidUpdate() {
    if (this.state.gameStarted) {
      this.checkFails();
      this.checkCorrects();
    }
  }
  componentDidMount() {
    document.addEventListener('keyup', this.handleWhosFirst);
    // this.introAudio.play();
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleWhosFirst);
  }