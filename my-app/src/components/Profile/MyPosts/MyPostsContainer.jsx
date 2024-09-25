import React from 'react';
// Импортируем экшены для обновления текста поста и добавления поста
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хуки для работы с Redux

  // Получаем список постов и текст нового поста из состояния Redux
const MyPostsContainer = () => {
  const posts = useSelector((state) => state.profilePage.posts);
  const newPostText = useSelector((state) => state.profilePage.newPostText);

  // Получаем функцию dispatch для отправки экшенов
  const dispatch = useDispatch();

  // Функция для обновления текста нового поста
  const updateNewPostText = (text) => {
    const action = updateNewPostTextActionCreator(text); // Создаем экшен с текстом
    dispatch(action); // Отправляем экшен в Redux
  }

  // Функция для добавления нового поста
  const addPost = () => {
      dispatch(addPostActionCreator()); // Отправляем экшен для добавления поста
  }

  return (
    // Рендерим компонент MyPosts, передавая ему необходимые пропсы
    <MyPosts posts={posts} newPostText={newPostText} updateNewPostText={updateNewPostText} addPost={addPost} />
  )
}

export default MyPostsContainer;


// import { connect } from 'react-redux';

// let mapStateToProps = (state) => {
//   return {
//     posts: state.profilePage.posts,
//     newPostText: state.profilePage.newPostText
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       let action = updateNewPostTextActionCreator(text);
//       dispatch(action);
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     }
//   }
// }

// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// export default MyPostsContainer;