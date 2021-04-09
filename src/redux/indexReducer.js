import chats, {initialState as chatsInitialState} from './chats/chatsReducer';

const rootReducer = {
  chats,
};

export const exampleInitialState = {
  chats: chatsInitialState,
};

export default rootReducer;
