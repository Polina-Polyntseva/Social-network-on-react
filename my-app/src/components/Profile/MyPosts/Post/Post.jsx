import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://i.pinimg.com/originals/8f/8a/6f/8f8a6f34b79c9b925a9592ede75a6d95.jpg" alt="" />
        { props.message }
        <div>
        { props.likesCount }
        </div>
      </div>
    </div>
  )
};

export default Post;