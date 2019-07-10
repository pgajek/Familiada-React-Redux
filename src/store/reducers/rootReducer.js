const questions = [
  {
    id: 1,
    question: 'Europejskie panstwo wieksze od polski?',
    answers: [
      {
        id: 1,
        name: 'francja',
        points: 33,
        correct: false
      },
      {
        id: 2,
        name: 'wielka brytania',
        points: 21,
        correct: false
      },
      {
        id: 3,
        name: 'wlochy',
        points: 16,
        correct: false
      },
      {
        id: 4,
        name: 'niemcy',
        points: 11,
        correct: false
      }
    ]
  },
  {
    id: 2,
    question: 'Jakie ciasto kojarzy sie z wizyta u babci?',
    answers: [
      {
        id: 1,
        name: 'szarlotka',
        points: 45,
        correct: false
      },
      {
        id: 2,
        name: 'sernik',
        points: 30,
        correct: false
      },
      {
        id: 3,
        name: 'makowiec',
        points: 27,
        correct: false
      }
    ]
  },
  {
    id: 3,
    question: 'Jakie klawisze oprocz literowych znajduja się na klawiaturze?',
    answers: [
      {
        id: 1,
        name: 'spacja',
        points: 51,
        correct: false
      },
      {
        id: 2,
        name: 'enter',
        points: 38,
        correct: false
      },
      {
        id: 3,
        name: 'shift',
        points: 22,
        correct: false
      },
      {
        id: 4,
        name: 'alt',
        points: 19,
        correct: false
      }
    ]
  },
  {
    id: 4,
    question: 'Jak zabijamy czas podczas jazdy pociagiem?',
    answers: [
      {
        id: 1,
        name: 'czytamy',
        points: 51,
        correct: false
      },
      {
        id: 2,
        name: 'spimy',
        points: 38,
        correct: false
      },
      {
        id: 3,
        name: 'patrzymy przez okno',
        points: 22,
        correct: false
      },
      {
        id: 4,
        name: 'rozmyslamy',
        points: 19,
        correct: false
      },
      {
        id: 5,
        name: 'sluchamy muzyki',
        points: 10,
        correct: false
      }
    ]
  },
  {
    id: 5,
    question: 'Co moze poprawic nasz nastroj?',
    answers: [
      {
        id: 1,
        name: 'muzyka',
        points: 37,
        correct: false
      },
      {
        id: 2,
        name: 'zakupy',
        points: 29,
        correct: false
      },
      {
        id: 3,
        name: 'pogoda',
        points: 25,
        correct: false
      },
      {
        id: 4,
        name: 'spacer',
        points: 13,
        correct: false
      },
      {
        id: 5,
        name: 'spotkanie',
        points: 7,
        correct: false
      }
    ]
  },
  {
    id: 6,
    question: 'Czesc garderoby na litere S?',
    answers: [
      {
        id: 1,
        name: 'spodnie',
        points: 34,
        correct: false
      },
      {
        id: 2,
        name: 'sweter',
        points: 33,
        correct: false
      },
      {
        id: 3,
        name: 'sukienka',
        points: 22,
        correct: false
      },
      {
        id: 4,
        name: 'spodnica',
        points: 19,
        correct: false
      },
      {
        id: 5,
        name: 'skarpetka',
        points: 12,
        correct: false
      },
      {
        id: 6,
        name: 'szalik',
        points: 6,
        correct: false
      }
    ]
  },
  {
    id: 7,
    question: 'Co zapada przed noca?',
    answers: [
      {
        id: 1,
        name: 'zmrok',
        points: 40,
        correct: false
      },
      {
        id: 2,
        name: 'zmierzch',
        points: 31,
        correct: false
      },
      {
        id: 3,
        name: 'wieczor',
        points: 20,
        correct: false
      }
    ]
  },
  {
    id: 8,
    question: 'Wymien elementy dekoracji wnetrz?',
    answers: [
      {
        id: 1,
        name: 'zaslony',
        points: 30,
        correct: false
      },
      {
        id: 2,
        name: 'firanki',
        points: 20,
        correct: false
      },
      {
        id: 3,
        name: 'lampa',
        points: 10,
        correct: false
      },
      {
        id: 4,
        name: 'obraz',
        points: 5,
        correct: false
      }
    ]
  }
];
const initialState = {
  currentQuestion: null,
  team1: {
    name: 'team1',
    points: 0,
    fails: 0
  },
  team2: {
    name: 'team2',
    points: 0,
    fails: 0
  },
  gameStarted: false,
  inputValue: '',
  activeTeam: 'team1',
  winner: null,
  whosFirst: false,
  surname1: '',
  surname2: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WHOS_FIRST':
      return {
        ...state,
        activeTeam: action.payload,
        whosFirst: false
      };
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case 'START_GAME':
      return {
        ...state,
        team1: {
          ...state.team1,
          name: state.surname1
        },
        team2: {
          ...state.team2,
          name: state.surname2
        },
        whosFirst: true,
        gameStarted: true
      };

    case 'NEW_QUESTION':
      const question = questions[Math.floor(Math.random() * questions.length)];
      const newQuestions = questions.filter(q => q !== question);
      return {
        ...state,
        whosFirst: state.gameStarted,
        currentQuestion: question,
        questions: newQuestions,
        team1: {
          ...state.team1,
          fails: 0
        },
        team2: {
          ...state.team2,
          fails: 0
        }
      };
    case 'CORRECT_ANSWERS':
      const activeTeam = state.activeTeam;
      return {
        ...state,
        inputValue: '',
        [activeTeam]: {
          ...state[activeTeam],
          points: state[activeTeam].points + action.payload.answer[0].points
        }
      };

    case 'ADD_FAILS':
      const active = state.activeTeam;
      return {
        ...state,
        inputValue: '',
        activeTeam: active,
        [active]: {
          ...state[active],
          fails: state[active].fails + 1
        }
      };
    case 'HANDLE_CHECK_FAILS':
      const team = action.payload;
      return {
        ...state,
        activeTeam: team,
        [team]: {
          ...state[team],
          fails: 2
        }
      };
    default:
      return state;
  }
};
