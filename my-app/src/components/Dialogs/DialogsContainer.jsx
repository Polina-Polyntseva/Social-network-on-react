import React from "react";
import { sendMessage } from "../../redux/dialogs-reducer"; //Импортируем действие для отправки сообщения
import { updateNewMessageBody } from "../../redux/dialogs-reducer";//Импортируем действие для обновления текста нового сообщения
import Dialogs from "./Dialogs";
import { useDispatch, useSelector } from "react-redux"; //Импортируем хуки для работы с Redux
// import { redirect } from "react-router-dom";


const DialogsContainer = () => {
  const dialogsPage = useSelector(state => state.dialogsPage);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    dispatch(sendMessage());
  };

  const handleUpdateNewMessageBody = (body) => {
    dispatch(updateNewMessageBody(body));
  };
  
  return (
    <Dialogs dialogsPage={dialogsPage} updateNewMessageBody={handleUpdateNewMessageBody} sendMessage={handleSendMessage} />
  );
};

export default DialogsContainer;
// //Контейнер для управления логикой диалогов
// const DialogsContainer = () => {

//   const dialogsPage = useSelector((state) => state.dialogsPage); //Получаем состояние стр диалогов из store

//   const dispatch = useDispatch(); //Получаем доступ к dispatch для отправки действия

//   const sendMessage = () => { //Функция для обновления текста нового сообщения
//     dispatch(sendMessageCreator()); //Отправляем действие для обновления текста сообщения
//   }

//   const updateNewMessageBody = (body) => { //Функция для отправки сообщения
//      dispatch(updateNewMessageBodyCreator(body)); //Отправляем действие с текстом сообщения
//   }

//   return (
//     <Dialogs dialogsPage={dialogsPage} updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage} />
//   )
// }

// export default DialogsContainer;

// Старая версия 
// import { connect } from "react-redux";

// let mapStateToProps = (state) => {
//   return{
//     dialogPage: state.dialogPage
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewMessageBody: () => {
//       dispatch(sendMessageCreator());
//     },
//     sendMessage: (body) => {
//       dispatch(updateNewMessageBodyCreator(body));
//     }
//   }
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsContainer;