import axios from "../utils/AxiosPlugin";

export const CreateClientAPI = async params => {
  return await axios.post("client/", params);
};

export const GetClientsAPI = async () => {
  return await axios.get("client/");
};

export const DeleteClientAPI = async id => {
  return await axios.delete(`client/${id}`);
};
