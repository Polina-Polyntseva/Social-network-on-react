import React from "react";
import { Link } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogsItem = (props) => {
  let path="/dialogs/" + props.id; // Формируем путь для диалога по id
  return  (
    <div className={s.dialog + ' ' + s.active}>
      <Link to={path}>{props.name}</Link> {/* Ссылка на диалог */}
    </div>
  )
}

export default DialogsItem;