import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={s.messages}>{props.messages}</div> // Рендерим сообщение
  )
}

export default Message;