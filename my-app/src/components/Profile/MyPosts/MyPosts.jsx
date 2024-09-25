import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 // Создаем элементы постов, мапируя массив постов в массив компонентов Post
  let postsElements = props.posts.map((p) => <Post message={p.messages} likesCount={p.likesCount} />);

  // Создаем реф для текстового поля нового поста
  let newPostElement = React.createRef();

    // Функция для добавления поста
  let onAddPost = () => {
    props.addPost(); // Вызываем пропс-функцию для добавления поста
  };

    // Функция для обработки изменения текста в текстовом поле
  let onPostChange = () => {
    let text = newPostElement.current.value; // Получаем текущее значение текстового поля
    props.updateNewPostText(text); // Вызываем пропс-функцию для обновления текста нового поста
  };

  return (
    <div className={s.posts__block}>
      <h3>my posts</h3>
      <div>
        <div>
          {/* Обрабатываем изменения в текстовом поле */}
          <textarea onChange={ onPostChange } ref={ newPostElement } value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button> {/* Кнопка для добавления поста */}
        </div>
      </div>
      <div>
        { postsElements } {/* Отображаем элементы постов */}
      </div>
    </div>
  )
};

export default MyPosts;