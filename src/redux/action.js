export const setMyNumber = (myNumber) => {
  return {
    type: "SET_MYNUMBER",
    payload: myNumber,
  };
};

export const setSystemChoiceNumber = (systemChoiceNumber) => {
  return {
    type: "SET_SYSTEMCHOICENUMBER",
    payload: systemChoiceNumber,
  };
};

export const setSystemWrongNumbers = (systemWrongNumbers) => {
  return {
    type: "SET_SYSTEMWRONGNUMBERS",
    payload: systemWrongNumbers,
  };
};

export const setMinNumber = (minNumber) => {
  return {
    type: "SET_MINNUMBER",
    payload: minNumber,
  };
};

export const setMaxNumber = (maxNumber) => {
  return {
    type: "SET_MAXNUMBER",
    payload: maxNumber,
  };
};
