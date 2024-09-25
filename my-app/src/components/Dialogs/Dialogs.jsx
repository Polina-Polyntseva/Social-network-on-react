import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const { dialogs, messages, newMessageBody } = props.dialogsPage;

  const dialogsElements = dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id} />)
  const messagesElements = messages.map(m => <Message key={m.id} messages={m.messages} />)

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div>
          { messagesElements }
        </div>
        <div>
          <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Отправить сообщение'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

// //Компонент для отображения диалогов
// const Dialogs = (props) => {
//   let state = props.dialogPage; //Получаем состояние стр диалогов из пропсов
  
//   //Создаем элемент для списка диалогов
//   let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} /> );
//   //Создаем элемент для списка сообщений
//   let messagesElements = state.messages.map(m => <Message message={m.messages}/>);
//   //Получаем текст нового сообщения
//   let newMessageBody = state.newMessageBody;


//   //Функция для обработки клика на кновпку отправки сообщения
//   let onSendMessageClick = () => {
//     props.sendMessage(); //Вызываем функцию отправки сообщения
//   }

//   //Функция для обработки изменения текста нового сообщения
//   let onNewMessageChange = (e) => {
//     let body = e.target.value; //Получаем текст из текстового поля
//     props.updateNewMessageBody(body); //Вызываем функцию для обновления текста сообщения
//   }

//   return (
//     <div className={s.dialogs}>
//       <div className={s.dialogs__items}>
//         { dialogsElements } {/*Отображаем элементы диалогов */}
//       </div>
//       <div className={s.messages}>
//         <div>{ messagesElements }</div> {/*Отображаем сообщения */}
//         <div>
//           {/*Поле ввода для нового сообщения */}
//           <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Отправить сообщение'></textarea></div>
//           <div><button onClick={onSendMessageClick}>Отправить</button></div> {/* Кнопка для отправки сообщения */}
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Dialogs;