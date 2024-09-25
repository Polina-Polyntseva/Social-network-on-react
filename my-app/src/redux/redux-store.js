import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";

// Комбинация редьюсеров в корневой редьюсер
let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

// Создание store с корневым редьюсером
let store = configureStore({
  reducer: rootReducer
});

window.store = store;

export default store;