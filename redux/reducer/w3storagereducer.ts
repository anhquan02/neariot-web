import { CLEAR_STORAGE, UPDATE_STORAGE } from "../action/w3storage";

interface State {
  apiKey: "";
  web3StorageConnector: {};
}

const initState: State = {
  apiKey: "",
  web3StorageConnector: {},
};

const StorageReducer = (state = initState, content: any) => {
  const { type, value } = content;

  switch (type) {
    case CLEAR_STORAGE:
      return onClearStorage();
    case UPDATE_STORAGE:
      return onUpdateStorage(value);
    default:
      return state;
  }
};

const onClearStorage = () => {
  return initState;
};

const onUpdateStorage = ({
  apiKey,
  web3StorageConnector,
}: any) => {
  return {
    apiKey,
    web3StorageConnector,
  };
};

export default StorageReducer