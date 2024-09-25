import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {

  return (
    <div>
      <ProfileInfo /> {/* Рендерим информацию о профиле */}
      <MyPostsContainer /> {/* Рендерим контейнер с постами */}
    </div>
  )
};

export default Profile;