import * as actionTypes from "./actionTypes";

const defaultState = {
  clients: [],
  client: { device: "", platform: "", mode: "" },
  ready: false,
  error: false,
  loading: false
};

export default (state = defaultState, action) => {
  var stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.GET_CLIENTS:
      stateCopy.clients = action.payload;
      return stateCopy;
    case actionTypes.HANDLE_CLIENT_UPDATE:
      const client = state.client;
      client[action.field] = action.value;
      stateCopy.client = client;
      return stateCopy;
    case actionTypes.HANDLE_INPUT_UPDATE:
      const { name, value } = action;
      stateCopy[name] = value;
      return stateCopy;
    case actionTypes.RESET_INPUT:
      return defaultState;
    default:
      return state;
  }
};
