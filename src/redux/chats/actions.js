export const actions = {
  ADD_CHAT: 'ADD_CHAT',
  DELETE_CHAT: 'DELETE_CHAT',
  CHANGE_INPUT_STATUS: 'CHANGE_INPUT_STATUS',
};

export const addChat = ({chatName}) => ({
  type: actions.ADD_CHAT,
  chatName,
});

export const deleteChat = id => ({
  type: actions.DELETE_CHAT,
  id,
});

export const changeInputStatus = status => ({
  type: actions.CHANGE_INPUT_STATUS,
  status,
});
