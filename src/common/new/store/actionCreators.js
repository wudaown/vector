import * as actionTypes from "./actionTypes";
import { GetClientsAPI, CreateClientAPI, DeleteClientAPI } from "../../../api";

const handleClientsUpdate = payload => {
  return {
    type: actionTypes.GET_CLIENTS,
    payload
  };
};

export const handleInputUpdate = (name, value) => {
  return {
    type: actionTypes.HANDLE_INPUT_UPDATE,
    name,
    value
  };
};

export const handleClientUpdate = (field, value) => {
  return {
    type: actionTypes.HANDLE_CLIENT_UPDATE,
    field,
    value
  };
};

export const GetClients = () => {
  return dispatch => {
    GetClientsAPI()
      .then(res => {
        dispatch(handleClientsUpdate(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const DeleteClient = id => {
  return dispatch => {
    DeleteClientAPI(id)
      .then(res => {
        if (res.status === 204) {
          dispatch(GetClients());
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const resetInput = () => {
  return {
    type: actionTypes.RESET_INPUT
  };
};

export const handleClientSubmit = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { client } = state.newReducer;

    if (
      client.device.lenght === 0 ||
      client.platform.length === 0 ||
      client.mode.length === 0
    ) {
      dispatch(handleInputUpdate("error", true));
    } else {
      dispatch(handleInputUpdate("loading", true));
      CreateClientAPI(client)
        .then(() => {
          dispatch(handleInputUpdate("loading", false));
          dispatch(resetInput());
          dispatch(GetClients());
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
