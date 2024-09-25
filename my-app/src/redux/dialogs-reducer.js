import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice ({
  name: 'dialogs',
  initialState: {
    dialogs: [
      { id: 1, name: 'Polina' },
      { id: 2, name: 'Alla' },
      { id: 3, name: 'Diana' },
      { id: 4, name: 'Dasha' },
      { id: 5, name: 'Olya' },
      { id: 6, name: 'Alina' }
    ],
    messages: [
      { id: 1, messages: 'messages1' },
      { id: 2, messages: 'messages2' },
      { id: 3, messages: 'messages3' },
      { id: 4, messages: 'messages4' },
      { id: 5, messages: 'messages5' },
      { id: 6, messages: 'messages6' }
    ],
    newMessageBody: ''
  },
  reducers: { 
    updateNewMessageBody: (state, action) => {
      state.newMessageBody = action.payload;
    },
    sendMessage: (state) => {
      const body = state.newMessageBody;
      state.messages.push({ id:state.messages.length + 1, messages: body});
      state.newMessageBody = '';
    }
  }
})

export const { updateNewMessageBody, sendMessage} = dialogsSlice.actions;
export default dialogsSlice.reducer;
// //обЪявление типов действий для редьюсеров
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

// //Начальное состояние для редьюсера диалогов
// let initialState = {
//   dialogs: [
    // {id: 1, name: 'Polina'},
    // {id: 2, name: 'Alla'},
    // {id: 3, name: 'Diana'},
    // {id: 4, name: 'Dasha'},
    // {id: 5, name: 'Olya'},
    // {id: 6, name: 'Alina'}
//   ],
//   messages: [
    // {id: 1, messages: 'messages1'},
    // {id: 2, messages: 'messages2'},
    // {id: 3, messages: 'messages3'},
    // {id: 4, messages: 'messages4'},
    // {id: 5, messages: 'messages5'},
    // {id: 6, messages: 'messages6'}
//   ],
//   //Текст нового сообщения
//   newMessageBody: ''
// };

// const dialogsReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case UPDATE_NEW_MESSAGE_BODY:
//       return {
//         ...state,
//         newMessageBody: action.body
//       };
//     case SEND_MESSAGE:
//       let body = state.newMessageBody;
//       return {
//         ...state,
//         newMessageBody: '',
//         messages: [...state.messages, { id: state.messages.length + 1, messages: body }]
//       };
//     default:
//       return state;
//   }
// };

// //Создание действий для отправки сообщения
// export const sendMessageCreator = () => ({type: SEND_MESSAGE});

// //Создание действия для обновления текста нового сообщения
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

// export default dialogsReducer;


// Старый вариант
// //Редьюсер для обработки событий диалогов
// const dialogsReducer = (state = initialState, action) => {
//   switch(action.type) {
//     //Обновление текста нового сообщения
//     case UPDATE_NEW_MESSAGE_BODY:
//       // state.newMessageBody = action.body; //Изменяем текст нового сообщения
//       return {
//         ...state,
//         newMessageBody: action.body
//       };
//       //Отправка сообщения
//     case SEND_MESSAGE:
//       let body = state.newMessageBody; //Получаем текст сообщения
//       // state.newMessageBody = ''; //Очищаем текст нового сообщения
//       //Добавляем новое сообщение в список новых сообщений
//       state.messages.push({id: 7, messages: body});
//       return {
//         ...state,
//         newMessageBody: ''
//       };
//     default: //Возврат состояния по умолчанию
//       return state;
//   }
// };