const INITIAL_STATE = {
  minNumber: 0,
  maxNumber: 100,
  myNumber: "",
  systemChoiceNumber: [],
  systemWrongNumbers: [],
  systemRound: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MINNUMBER":
      return { ...state, minNumber: action.payload };
    case "SET_MAXNUMBER":
      return { ...state, maxNumber: action.payload };
    case "SET_MYNUMBER":
      return { ...state, myNumber: action.payload };
    case "SET_SYSTEMCHOICENUMBER":
      return {
        ...state,
        systemChoiceNumber: [...state.systemChoiceNumber, action.payload],
      };
    case "SET_SYSTEMWRONGNUMBERS":
      return {
        ...state,
        systemWrongNumbers: [action.payload, ...state.systemWrongNumbers],
      };
    case "SET_SYSTEMROUND":
      return { ...state, systemRound: action.payload };
    default:
      return state;
  }
};
