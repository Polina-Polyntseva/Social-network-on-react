import React, { useEffect } from "react";
import axios from 'axios';
import Users from './Users';
import { useDispatch, useSelector } from "react-redux";
import { setUsers, follow, unfollow } from "../../redux/users-reducer"; //setCurrentPage 

const UsersContainer = () => {
  const usersPage = useSelector(state => state.usersPage.users);
  // const pageSize = useSelector(state => state.usersPage.users.pageSize);
  // const totalUsersCount = useSelector(state => state.usersPage.users.totalUsersCount);
  // const currentPage = useSelector(state => state.usersPage.users.currentPage);
  const dispatch = useDispatch();

  // const pagesCount = Math.ceil(totalUsersCount / pageSize);
  // const pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`);
  //     dispatch(setUsers({ users: response.data.items, totalCount: response.data.totalCount }));
  //   };

  //   fetchUsers();
  // }, [dispatch, currentPage, pageSize]);

  useEffect(() => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      dispatch(setUsers(response.data.items)); // Используем dispatch для обновления состояния
    });
  }, [dispatch]);

  const handleFollow = (id) => {
    dispatch(follow(id));
  };

  const handleUnfollow = (id) => {
    dispatch(unfollow(id));
  };

  // const handlePageChange = (pageNumber) => {
  //   dispatch(setCurrentPage(pageNumber));
  // };

  // const pages = [...Array(pagesCount)].map((_, i) => i + 1); // массив страниц 

  return <Users usersPage={usersPage} follow={handleFollow} unfollow={handleUnfollow} /> //setCurrentPage={handlePageChange}

}

export default UsersContainer;

// import React, { useEffect } from "react";
// import axios from 'axios';
// import Users from './Users';
// import { useDispatch, useSelector } from "react-redux";
// import { setUsers, follow, unfollow, setCurrentPage } from "../../redux/users-reducer";

// const UsersContainer = () => {
//   const usersPage = useSelector(state => state.usersPage.users); //Получаем пользователей из состояния
//   const pageSize = useSelector(state => state.users.pageSize);
//   const totalUsersCount = useSelector(state => state.users.totalUsersCount);
//   const currentPage = useSelector(state => state.users.currentPage);
//   const dispatch = useDispatch(); //Получаем доступ к dispath

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await 
//     }
//       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//       dispatch(setUsers(response.data.items)); // Используем dispatch для обновления состояния
//     });
//   }, [dispatch]);

//   const handleFollow = (id) => {
//     dispatch(follow(id));
//   };

//   const handleUnfollow = (id) => {
//     dispatch(unfollow(id));
//   };

//   return <Users usersPage={usersPage} follow={handleFollow} unfollow={handleUnfollow} />
// };

// export default UsersContainer;
