import React from "react";
import s from './ProfileInfo.module.css';
import icon from './img/icon.png';

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <img className={s.icon} src={icon} alt="Аватар" />
      <div className={s.info}>
        <h2 className={s.title}>Имя</h2>
        <p className={s.age}>Возраст</p>
        <p className={s.descr}>ОписаниеОписаниеОписаниеОписаниеОписаниеОписание</p>
      </div>
    </div>
 )
};

export default ProfileInfo;