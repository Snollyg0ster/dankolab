import {actions} from './actions';

const getId = () => Math.trunc(Math.random() * Math.pow(10, 8)).toString();

export const initialState = {
  allChats: [{chatName: 'Лучшая беседа всех времён и народов', id: getId()}],
  inputStatus: false,
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_CHAT: {
      const updatedChats = [
        ...state.allChats,
        {chatName: action.chatName, id: getId()},
      ];

      return {...state, allChats: updatedChats};
    }
    case actions.CHANGE_INPUT_STATUS:
      return {...state, inputStatus: action.status};
    case actions.DELETE_CHAT: {
      const updatedChats = state.allChats.filter(item => item.id !== action.id);
      return {...state, allChats: updatedChats};
    }
    default:
      return state;
  }
};

export default chatsReducer;
