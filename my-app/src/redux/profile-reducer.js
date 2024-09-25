import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние для редьюсера
const initialState = {
    posts: [
      { id: 1, messages: 'messages1', likesCount: 11 },
      { id: 2, messages: 'messages2', likesCount: 11 },
      { id: 3, messages: 'messages3', likesCount: 11 },
      { id: 4, messages: 'messages4', likesCount: 11 },
      { id: 5, messages: 'messages5', likesCount: 11 },
      { id: 6, messages: 'messages6', likesCount: 11 },
    ],
    newPostText: 'orfrepomfgep[om' // Текст нового сообщения
};

// Создаем слайс для профиля
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
      addPostActionCreator(state) {
            const newPost = {
                id: state.posts.length + 1, // Используем длину массива для уникального ID
                messages: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost); // Добавляем новый пост
            state.newPostText = ''; // Очищаем текст нового сообщения
        },
        updateNewPostTextActionCreator(state, action) {
            state.newPostText = action.payload; // Обновляем текст нового поста
        }
    }
});

// Экспортируем действия
export const { addPostActionCreator, updateNewPostTextActionCreator } = profileSlice.actions;

// Экспортируем редьюсер
export default profileSlice.reducer;

//Старый вариант
// //ОбЪявлние типов действий для редьюсера
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// //Начальное состояние для редьюсера
// let initialState = {
//     posts: [
//       {id: 1, messages: 'messages1', likesCount: 11},
//       {id: 2, messages: 'messages2', likesCount: 11},
//       {id: 3, messages: 'messages3', likesCount: 11},
//       {id: 4, messages: 'messages4', likesCount: 11},
//       {id: 5, messages: 'messages5', likesCount: 11},
//       {id: 6, messages: 'messages6', likesCount: 11},
//     ],
//     newPostText: 'orfrepomfgep[om' //Текст нового сообщения
// };

// //Редьюсер для обработки событий профиля
// const profileReducer = (state = initialState, action) => {
//   switch(action.type) {
//     //Добавление нового поста
//     case ADD_POST: {
//       let newPost = { 
//         id: 5,
//         messages: state.newPostText,
//         likesCount: 0
//       };
//       let stateCopy = {...state}; //Копируем текущее состояние
//       stateCopy.posts = [...state.posts]; //Копируем существующие посты
//       stateCopy.posts.push(newPost); //Добавляем новый пост
//       stateCopy.newPostText = ''; //Очищаем текст нового сообщения
//       return stateCopy; //Возвращаем обновленное состояние
//     }
//     //Обновление текста нового поста 
//     case UPDATE_NEW_POST_TEXT: {
//       let stateCopy = {...state}; //Копируем текущее состояние
//       stateCopy.newPostText = action.newText; //Обновляем текст нового поста
//       return stateCopy; //Возвращаем обновленное состояние 
//     }
//     default: //ВОзврат состояния по умолчанию
//       return state;
//   };
// };

// //Создаем действие для добавление нового поста
// export const addPostActionCreator = () => ({type: ADD_POST});

// //Создаем действие для обновления текста нового поста
// export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

// export default profileReducer;